// const express = require("express");
// const {
//   getAllGiveBook,
//   updateGiveBook,
//   deleteGiveBook,
//   getGiveBookDetails,
//   getAdminGiveBook,
//   createGiveBook,
// } = require("../controllers/giveBookController");

// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// const router = express.Router();

// router.route("/givebook").get(getAllGiveBook);

// router.route("/admin/givebook").get(isAuthenticatedUser, getAdminGiveBook);

// router.route("/givebook/new").post(createGiveBook);

// router
//   .route("/admin/givebook/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateGiveBook)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteGiveBook);

// router.route("/givebook/:id").get(getGiveBookDetails);

// module.exports = router;

const express = require("express");
const {
  getAllGiveBook,
  //   updateWantBook,
  //   deleteWantBook,
  //   getWantBookDetails,
  //   getAdminWantBook,
  createGiveBook,
} = require("../controllers/giveBookController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/givebook").get(getAllGiveBook);

// router
//   .route("/admin/wantbook")
//   .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminWantBook);

router.route("/givebook/new").post(createGiveBook);

// router
//   .route("/admin/wantBook/:id")
//   .put(isAuthenticatedUser, authorizeRoles("admin"), updateWantBook)
//   .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteWantBook);
//
// router.route("/wantBook/:id").get(getWantBookDetails);

module.exports = router;
