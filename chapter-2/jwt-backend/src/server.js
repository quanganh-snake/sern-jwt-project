import express from "express";
require("dotenv").config();
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiRoutes from "./routes/api";

//connect DB
import connection from "./config/connectDB";

//config Cos
import configCors from "./config/cors";
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

//test connection DB
connection();

//init web/api routes
initWebRoutes(app);
initApiRoutes(app);

app.listen(PORT, () => {
	console.log(">> JWT BackEND is running on the port = " + PORT);
});
