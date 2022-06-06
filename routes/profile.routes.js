const router = require("express").Router();
const UserModel = require("../models/User.model")
const uploader = require("../middlewares/uploader")
const isAuthenticated = require('../middlewares/isAuthenticated')

// GET 'api/profile' -> Muestra el perfil
router.get("/:id",isAuthenticated, async (req, res, next) => {

    const { _id } = req.payload
    try {
        const profileUser = await UserModel.findById(_id)
        console.log(profileUser)

        res.json( "Perfil mostrado" )

    } catch(error) { next(error) }
})

// POST '/api/profile' -> Crea el perfil del usuario
router.patch("/",isAuthenticated, uploader.single("image"), async (req, res, next) =>{

    const { username, email } = req.body
    const { _id } = req.payload

    try {
        await UserModel.findByIdAndUpdate(_id, {
            username,
            email,
            image: req.file.path
        })
        res.json( "Perfil Actualizado" )

    } catch(error) { next(error) }
})

module.exports = router;