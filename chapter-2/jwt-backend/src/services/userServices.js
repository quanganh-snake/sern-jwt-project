import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
// get the promise implementation, we will use bluebird
import bluebird from "bluebird";

// connect to the database with sequelize models index.js
import db from "../models/index";

// create the connection, specify bluebird as Promise
// const connection = await mysql.createConnection({ host: "localhost", user: "root", database: "jwt-askit", Promise: bluebird });

//bcrypt
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
	let hashPassword = bcrypt.hashSync(password, salt);
	return hashPassword;
};

const createNewUser = async (email, password, username) => {
	const queryString = `INSERT INTO user (email, password, username) VALUES (?, ?, ?)`;

	let hashPasswordUser = hashPassword(password);

	try {
		await db.User.create({
			username: username,
			email: email,
			password: hashPasswordUser,
		});
	} catch (error) {
		console.log(`>>>Error executing query: ${error}`);
	}
};

const deleteUser = async (userId) => {
	await db.User.destroy({
		where: { id: userId },
	});
	// const queryString = `DELETE FROM user WHERE id = ${id}`;
	// const connection = await mysql.createConnection({ host: "localhost", user: "root", password: "tbqa20102001", database: "jwt-askit", Promise: bluebird });

	// try {
	// 	const [rows, fields] = await connection.execute(queryString);
	// } catch (error) {
	// 	console.log(`>>>Error executing query: ${error}`);
	// }
};

const getAllUsers = async () => {
	// test relationships
	// let userRel = await db.User.findOne({
	// 	attributes: ["id", "username", "email"],
	// 	where: { id: 1 },
	// 	include: { model: db.Group, attributes: ["name", "description"] },
	// 	nest: true,
	// 	raw: true,
	// });
	// console.log("🚀 ~ file: userServices.js:57 ~ getAllUsers ~ userRel:", userRel);

	// let roles = await db.Role.findAll({
	// 	include: { model: db.Group, where: { id: 1 } },
	// 	nest: true,
	// 	raw: true,
	// });
	// console.log("🚀 ~ file: userServices.js:66 ~ getAllUsers ~ roles:", roles);

	let users = [];
	users = await db.User.findAll();
	return users;
};

const getUserById = async (userId) => {
	let user = {};
	user = await db.User.findOne({ where: { id: userId } });
	return user.get({ plain: true });
	// const queryString = `SELECT id, username, password, email FROM user WHERE id = ${id}`;
	// const connection = await mysql.createConnection({ host: "localhost", user: "root", password: "tbqa20102001", database: "jwt-askit", Promise: bluebird });
	// try {
	// 	const [rows, fields] = await connection.execute(queryString);
	// 	return rows;
	// } catch (error) {
	// 	console.log(`>>>Error executing query: ${error}`);
	// }
};

const updateUser = async (id, email, username) => {
	await db.User.update(
		{
			email: email,
			username: username,
		},
		{
			where: {
				id: id,
			},
		}
	);

	// const queryString = `UPDATE user SET email = ?, username = ? WHERE id = ?`;
	// let data = [email, username, id];
	// const connection = await mysql.createConnection({ host: "localhost", user: "root", password: "tbqa20102001", database: "jwt-askit", Promise: bluebird });

	// try {
	// 	const [rows, fields] = await connection.execute(queryString, data);

	// 	return rows;
	// } catch (error) {
	// 	console.log(`>>>Error executing query: ${error}`);
	// }
};

module.exports = {
	hashPassword,
	getAllUsers,
	createNewUser,
	deleteUser,
	getUserById,
	updateUser,
};
