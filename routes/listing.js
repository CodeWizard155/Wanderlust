const express =require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const{listingSchema }=require("../schema.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing=require("../models/listing.js")
const {isLoggedIn, isOwner,validateListing}=require("../middleware.js")
const listingController=require("../controllers/listings.js")
const multer=require("multer")
const {storage}=require("../cloudConfi.js");
const upload=multer({storage})

router
 .route("/")
 .get(wrapAsync(listingController.index)) 
 .post(isLoggedIn,validateListing ,upload.single('listing[image]'),wrapAsync(listingController.createListing) 
 );



//New ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,validateListing,upload.single('listing[image]'),wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));









//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));



module.exports=router; 
