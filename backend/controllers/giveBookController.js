const GiveBook = require("../models/giveBookModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

//create GiveBook -- Admin
exports.createGiveBook = catchAsyncErrors(async (req, res, next) => {
  //   req.body.user = req.user.id;

  const giveBook = await GiveBook.create(req.body);

  res.status(201).json({
    success: true,
    giveBook,
  });
});

// //Get All GiveBook
// exports.getAllGiveBook = catchAsyncErrors(async (req, res, next) => {
//   const resultPerPage = 8;
//   const giveBookCount = await GiveBook.countDocuments();
//   const apiFeature = new ApiFeatures(GiveBook.find(), req.query)
//     .search()
//     .filter();

//   let giveBook = await apiFeature.query;

//   let filteredGiveBookCount = giveBook.length;

//   apiFeature.pagination(resultPerPage);

//   giveBook = await apiFeature.query.clone();

//   res.status(200).json({
//     success: true,
//     giveBook,
//     giveBookCount,
//     resultPerPage,
//     filteredGiveBookCount,
//   });
// });

// //Get All GiveBook(Admin)
// exports.getAdminGiveBooks = catchAsyncErrors(async (req, res, next) => {
//   const giveBook = await GiveBook.find();

//   res.status(200).json({
//     success: true,
//     giveBook,
//   });
// });

//Get All WantBook
exports.getAllGiveBook = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const giveBooksCount = await GiveBook.countDocuments();

  const apiFeature = new ApiFeatures(GiveBook.find(), req.query)
    .search()
    .filter();

  let giveBook = await apiFeature.query;

  let filteredGiveBooksCount = giveBook.length;

  apiFeature.pagination(resultPerPage);

  giveBook = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    giveBook,
    giveBooksCount,
    resultPerPage,
    filteredGiveBooksCount,
  });
});

//Get All WantBook(Admin)
exports.getAdminGiveBooks = catchAsyncErrors(async (req, res, next) => {
  const giveBook = await WantBook.find();

  res.status(200).json({
    success: true,
    giveBook,
  });
});

//Get GiveBook Details
exports.getGiveBookDetails = catchAsyncErrors(async (req, res, next) => {
  const GiveBook = await GiveBook.findById(req.params.id);

  if (!GiveBook) {
    return next(new ErrorHandler("GiveBook not found", 404));
  }

  res.status(200).json({
    success: true,
    GiveBook,
  });
});
//Update GiveBook -- Admin

exports.updateGiveBook = catchAsyncErrors(async (req, res, next) => {
  let GiveBook = await GiveBook.findById(req.params.id);

  if (!GiveBook) {
    return next(new ErrorHandler("GiveBook not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < GiveBook.images.length; i++) {
      await cloudinary.v2.uploader.destroy(GiveBook.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "GiveBooks",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  GiveBook = await GiveBook.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    succes: true,
    GiveBook,
  });
});

//Delete GiveBook

exports.deleteGiveBook = catchAsyncErrors(async (req, res, next) => {
  const GiveBook = await GiveBook.findById(req.params.id);

  if (!GiveBook) {
    return next(new ErrorHandler("GiveBook not found", 404));
  }

  //Deleting Images from Cloudinary
  for (let i = 0; i < GiveBook.images.length; i++) {
    await cloudinary.v2.uploader.destroy(GiveBook.images[i].public_id);
  }

  await GiveBook.remove();

  res.status(200).json({
    success: true,
    message: "GiveBook Delete Successfully",
  });
});
