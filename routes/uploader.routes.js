const router = require("express").Router();

const uploader = require("../middlewares/uploader.js")

// Ruta para enviar imagen a cloudinary y recibe un URL
router.post("/", uploader.single("image"), (req, res, next) => {

    console.log(req.file.path)
    res.json(req.file.path)

})

module.exports = router;