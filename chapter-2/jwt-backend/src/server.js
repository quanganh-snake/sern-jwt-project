import express from "express";
require("dotenv").config();
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";

//config Cos
import configCors from "./configs/cors";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 8088;

//config Cos
configCors(app);

//config view engine
configViewEngine(app);

//config body parser (body-parser) => khi gửi request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//init web/api routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
	console.log(">> JWT BackEND is running on the port = " + PORT);
});
