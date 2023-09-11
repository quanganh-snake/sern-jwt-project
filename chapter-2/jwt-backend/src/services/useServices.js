import mysql from "mysql2";
import bcrypt from "bcryptjs";

// create the connection to database
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "tbqa20102001",
	database: "jwt-askit",
});

//bcrypt
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
	let hashPassword = bcrypt.hashSync(password, salt);
	return hashPassword;
};

const createNewUser = (email, password, username) => {
	let hashPasswordUser = hashPassword(password);

	connection.query(`INSERT INTO user (email, password, username) VALUES (?, ?, ?)`, [email, hashPasswordUser, username], function (err, results, fields) {
		if (err) {
			console.log("Error inserting: ", err);
		}
		console.log("data insert: ", results); // results contains rows returned by server
	});
};

const getAllUsers = () => {
	let users = [];
	connection.query(`SELECT username, password, email FROM user`, function (err, results, fields) {
		if (err) {
			console.log("Error inserting: ", err);
		}
		console.log("data insert: ", results); // results contains rows returned by server
	});
};

module.exports = {
	hashPassword,
	createNewUser,
};
