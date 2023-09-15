import { registerNewUser } from "../services/loginRegisterService";

const testApi = (req, res) => {
	return res.status(200).json({
		message: "ok",
		data: "test api",
	});
};

const handleRegister = async (req, res) => {
	try {
		//req.body: email, phone, username, password
		if (!req.body.email || !req.body.phone || !req.body.password) {
			return res.status(200).json({
				EM: "Missing required parameters", //Error Message
				EC: "1", //Error Code
				DT: "register-error", //Data
			});
		}

		//service: create user
		let data = registerNewUser(req.body);

		return res.status(200).json({
			EM: data.EM, //Error Message
			EC: data.EC, //Error Code
			DT: "", //Data
		});
	} catch (error) {
		return res.status(500).json({
			EM: "Error from SERVER", //Error Message
			EC: "-1", //Error Code
			DT: "register-error", //Data
		});
	}
	console.log("data register: ", req.body);
	return res.send("register: ", req.body);
};

module.exports = {
	testApi,
	handleRegister,
};
