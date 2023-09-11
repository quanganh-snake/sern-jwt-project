import express from "express";
import apiController from "../controllers/apiController";
const router = express.Router();

/**
 *
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
	//Rest APi
	//GET - R, POST - C, PUT - U, DELETE - D
	router.get("/test-api", apiController.testApi);
	router.post("/register", apiController.handleRegister);

	return app.use("/api/v1", router);
};

export default initApiRoutes;
