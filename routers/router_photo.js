const router = require("express").Router()
const Photo = require("../controllers/photo")

router.get("/", Photo.getPhotos)
router.get("/:id", Photo.getPhotoById)
router.post("/", Photo.createPhoto)
router.put("/:id", Photo.updatePhotoById)
router.delete("/:id", Photo.deletePhotoById)

module.exports = router