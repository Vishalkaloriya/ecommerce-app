// import express from "express";
// import {registerConterller,loginController,testController, forgotPasswordController,} from  "../controllers/authController.js" ;
// import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
// //Router object
// const Router = express.Router();

// //routing
// //REGISTER || METHOD POST
// Router.post('/register',registerConterller);

// //LOGIN || POST
// Router.post('/login',loginController);

// //Forgot Password || POST
// Router.post('/forgot-password',forgotPasswordController)

// //test routes
// Router.get('/test',requireSignIn,isAdmin,testController);

// //protected User route auth
// Router.get('/user-auth', requireSignIn, (req, res) => {
//     res.status(200).send({ok:true});
// });

// //protected Admin route auth
// Router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
//     res.status(200).send({ok:true});
// });

// export default Router; 


import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getAllOrdersController,
  getOrdersController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

//router object
const Router = express.Router();

//routing
//REGISTER || METHOD POST
Router.post("/register", registerController);

//LOGIN || POST
Router.post("/login", loginController);

//Forgot Password || POST
Router.post("/forgot-password", forgotPasswordController);

//test routes
Router.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
Router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
Router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
Router.put("/profile", requireSignIn, updateProfileController);

//orders
Router.get("/orders", requireSignIn, getOrdersController);;

//all orders
Router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

export default Router;