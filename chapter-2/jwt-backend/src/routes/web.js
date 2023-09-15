import express from "express";
import homeController from "../controllers/homeController";
import apiController from "../controllers/apiController";
const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initWebRoutes = (app) => {
	router.get("/", homeController.handleHome);
	router.get("/login", homeController.handleLogin);
	router.get("/users", homeController.handleUserPage);
	router.post("/users/create-user", homeController.handleCreateNewUser);
	router.post("/delete-user/:id", homeController.handleDeleteUser);
	router.get("/update-user/:id", homeController.handleUpdatePageUser);
	router.post("/users/update-user", homeController.handleUpdateUser);
	//Rest APi
	//GET - R, POST - C, PUT - U, DELETE - D
	router.get("/api/test-api", apiController.testApi);

	return app.use("/", router);
};

export default initWebRoutes;
