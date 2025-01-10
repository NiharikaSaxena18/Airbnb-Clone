const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing");
const Review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync");
const session = require("express-session");
const flash = require("connect-flash");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware");
const reviewController = require("../controllers/reviews");

router.use(flash());

//Reviews Post Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Reviews Delete Route
router.delete("/:reviewId", isLoggedIn, isAuthor, wrapAsync(reviewController.destroyReview));

module.exports=router;