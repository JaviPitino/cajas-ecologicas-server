const router = require ("express").Router();
const UserModel = require("../models/User.model.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../middlewares/isAuthenticated.js");

//Aquí iran nuestras rutas de validación

// POST '/api/auth/signup' => Registramos al usuario
router.post("/signup", async (req, res, next) => {
  const { email, password, username } = req.body;

  //! AQUI REALIZAMOS LA VALIDACIÓN BACKEND

  if (!email || !password || !username) {
    res
      .status(400)
      .json({ errorMessage: "Se deben rellenar todos los campos" });
    return;
  }

  //*Solicitamos que la contraseña cumpla unos requisitos con bcryptjs
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (passwordRegex.test(password) === false) {
    res.status(411).json({
      errorMessage:
        "Necesitas 8 carácteres, uno de ellos numérico y otro en mayúscula",
    });
    return;
  }

  try {
    const foundUser = await UserModel.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (foundUser !== null) {
      res.json({ errorMessage: "El usuario ya existe" });
      return;
    }

    //*Encriptamos la contraseña con bcryptjs
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    await UserModel.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(201).json()
  } catch (error) {
    next(error);
  }
});

// POST '/api/auth/login' => VERIFICAMOS CREDENCIALES DEL USUARIO Y ABRIMOS "SESIÓN"
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ errorMessage: "Debe rellenar todos los campos" });
    return;
  }

  try {
    const foundUser = await UserModel.findOne({ email: email });
    if (foundUser === null) {
      res.status(400).json({ errorMessage: "El usuario no existe" });
      return;
    }

    //*Validamos al usuario
    const passwordMatch = await bcryptjs.compare(password, foundUser.password);
    if (passwordMatch === false) {
      res.status(401).json({ errorMessage: "La contraseña es incorrecta" });
      return;
    }

    //*Creamos la sesión del usuario

    const payload = {
      _id: foundUser._id,
      email: foundUser.email,
      username: foundUser.username,
      role: foundUser.role,
    };
    
    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "12h",
    });
    res.json({ authToken: authToken });
  } catch (error) {}
});

// GET '/api/auth/verify' => Comprobamos que el Token es valido. Ruta usada para el flujo del FrontEnd
router.get("/verify", isAuthenticated, (req, res, next) => {
  res.json(req.payload);
});
module.exports = router;
