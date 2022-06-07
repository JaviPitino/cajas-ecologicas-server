const router = require("express").Router();
const UserModel = require("../models/User.model")
const uploader = require("../middlewares/uploader")
const isAuthenticated = require('../middlewares/isAuthenticated')

// GET 'api/profile' -> Muestra el perfil
router.get("/:id",isAuthenticated, async (req, res, next) => {

    const { _id } = req.payload
    try {
        const profileUser = await UserModel.findById(_id)
        res.json(profileUser)

    } catch(error) { next(error) }
})

// PATCH '/api/profile' -> Modificar el Perfil de Usuario
router.patch("/:id/edit",isAuthenticated, uploader.single("image"), async (req, res, next) =>{

    const { username, email, image } = req.body
    const { id } = req.params

    try {
        await UserModel.findByIdAndUpdate(id, {
            username,
            email,
            image
        })
        res.json( 'Perfil creado' )

    } catch(error) { next(error) }
})



module.exports = router;