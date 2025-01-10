const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const session = require("express-session");
const flash = require("connect-flash");
const multer  = require('multer');
const {storage} = require("../cloudConfig");
const upload = multer({storage});
const {validateListing, validateReview, isLoggedIn, isOwner} = require("../middleware");
const listingController = require("../controllers/listings");
router.use(flash());

router.route("/")
.get(wrapAsync(listingController.index))   //Index Route
//.post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing)); //Create Route
.post(upload.single("listing[image]"),(req,res)=>{
    console.log(req.file);
    res.send(req.file);
});

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing)) //Show Route
.put(isLoggedIn, isOwner,upload.single("listing[image]"), validateListing, listingController.updateListing) //Update Route
.delete(isLoggedIn, isOwner, listingController.destroyListing); //Delete Route

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports=router;