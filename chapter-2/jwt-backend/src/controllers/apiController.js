const testApi = (req, res) => {
	return res.status(200).json({
		message: "ok",
		data: "test api",
	});
};

const handleRegister = (req, res) => {
	console.log("data register: ", req.body);
	return res.send("register: ", req.body);
};

module.exports = {
	testApi,
	handleRegister,
};
