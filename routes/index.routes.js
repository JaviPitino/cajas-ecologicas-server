const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
const authRoutes = require ('./auth.routes')
router.use('/auth', authRoutes)

const foodRoutes = require ('./food.routes')
router.use('/alimentos', foodRoutes)

const farmerRoutes = require ('./farmer.routes')
router.use('/agricultores', farmerRoutes)

const profileRoutes = require("./profile.routes")
router.use("/profile", profileRoutes)

const boxRoutes = require("./box.routes.js")
router.use("/cajas", boxRoutes)

const uploaderRoutes = require("./uploader.routes.js")
router.use("/uploader", uploaderRoutes)

module.exports = router;
