import db from "../models/index";
import bcrypt from "bcryptjs";

//bcrypt
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
	let hashPassword = bcrypt.hashSync(password, salt);
	return hashPassword;
};

const checkEmailExist = async (emailUser) => {
	let user = await db.User.findOne({
		where: { email: emailUser },
	});

	if (user) {
		return true;
	}
	return false;
};

const checkPhoneExist = async (phoneUser) => {
	let user = await db.User.findOne({
		where: { phone: phoneUser },
	});

	if (user) {
		return true;
	}
	return false;
};

const registerNewUser = async (rawUserData) => {
	try {
		//B1. Check email/phoennumber is exist
		let isEmailExist = await checkEmailExist(rawUserData.email);
		if (isEmailExist === true) {
			return {
				EM: "The email already exists",
				EC: 1,
			};
		}
		let isPhoneExist = await checkPhoneExist(rawUserData.phone);
		if (isPhoneExist === true) {
			return {
				EM: "The phone already exists",
				EC: 1,
			};
		}
		//B2: hash password
		let hashPasswordUser = hashPassword(rawUserData.password);

		//B3: create new user
		await db.User.create({
			email: rawUserData.email,
			username: rawUserData.username,
			password: hashPasswordUser,
			phone: rawUserData.phone,
		});

		return {
			EM: "Created User successfully",
			EC: 0,
		};
	} catch (error) {
		return {
			EM: "Error creating user in service",
			EC: -2,
		};
	}
};

module.exports = {
	registerNewUser,
};
