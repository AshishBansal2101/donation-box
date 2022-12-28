const express = require("express");
const {
  getAllWantBook,
  //   updateWantBook,
  //   deleteWantBook,
  //   getWantBookDetails,
  //   getAdminWantBook,
  createWantBook,
} = require("../controllers/wantBookController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/wantbook").get(getAllWantBook);

// router
//   .route("/admin/wantbook")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminWantBook);

router.route("/wantbook/new").post(createWantBook);

// router
//   .route("/admin/wantBook/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateWantBook)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteWantBook);
//
// router.route("/wantBook/:id").get(getWantBookDetails);

module.exports = router;
