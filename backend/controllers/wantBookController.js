const WantBook = require("../models/wantBookModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

//create WantBook -- Admin
exports.createWantBook = catchAsyncErrors(async (req, res, next) => {
  //   req.body.user = req.user.id;
  //   console.log(req.body);
  const wantBook = await WantBook.create(req.body);

  res.status(201).json({
    success: true,
    wantBook,
  });
});

//Get All WantBook
exports.getAllWantBook = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const wantBooksCount = await WantBook.countDocuments();

  const apiFeature = new ApiFeatures(WantBook.find(), req.query)
    .search()
    .filter();

  let wantBook = await apiFeature.query;

  let filteredWantBooksCount = wantBook.length;

  apiFeature.pagination(resultPerPage);

  wantBook = await apiFeature.query.clone();

  res.status(200).json({
    success: true,
    wantBook,
    wantBooksCount,
    resultPerPage,
    filteredWantBooksCount,
  });
});

//Get All WantBook(Admin)
exports.getAdminWantBooks = catchAsyncErrors(async (req, res, next) => {
  const wantBook = await WantBook.find();

  res.status(200).json({
    success: true,
    wantBook,
  });
});

//Get WantBook Details
exports.getWantBookDetails = catchAsyncErrors(async (req, res, next) => {
  const WantBook = await WantBook.findById(req.params.id);

  if (!WantBook) {
    return next(new ErrorHandler("WantBook not found", 404));
  }

  res.status(200).json({
    success: true,
    WantBook,
  });
});
//Update WantBook -- Admin

exports.updateWantBook = catchAsyncErrors(async (req, res, next) => {
  let WantBook = await WantBook.findById(req.params.id);

  if (!WantBook) {
    return next(new ErrorHandler("WantBook not found", 404));
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
    for (let i = 0; i < WantBook.images.length; i++) {
      await cloudinary.v2.uploader.destroy(WantBook.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "WantBooks",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  WantBook = await WantBook.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    succes: true,
    WantBook,
  });
});

//Delete WantBook

exports.deleteWantBook = catchAsyncErrors(async (req, res, next) => {
  const WantBook = await WantBook.findById(req.params.id);

  if (!WantBook) {
    return next(new ErrorHandler("WantBook not found", 404));
  }

  //Deleting Images from Cloudinary
  for (let i = 0; i < WantBook.images.length; i++) {
    await cloudinary.v2.uploader.destroy(WantBook.images[i].public_id);
  }

  await WantBook.remove();

  res.status(200).json({
    success: true,
    message: "WantBook Delete Successfully",
  });
});
