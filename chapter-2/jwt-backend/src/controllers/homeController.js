import useServices from "../services/useServices";

const handleHome = (req, res) => {
	return res.render("home.ejs");
};

const handleLogin = (req, res) => {
	return res.render("login.ejs");
};

const handleUserPage = (req, res) => {
	return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	let username = req.body.username;

	useServices.createNewUser(email, password, username);

	console.log("create new user: ", req.body);
	return res.send("create new user");
};

const handleDeleteUser = (req, res) => {
	return res.send("delete user");
};

const handleUpdateUser = (req, res) => {
	return res.send("update user");
};

const handleUpdatePageUser = (req, res) => {
	return res.send("page update user");
};

module.exports = {
	handleHome,
	handleLogin,
	handleUserPage,
	handleCreateNewUser,
	handleDeleteUser,
	handleUpdatePageUser,
	handleUpdateUser,
};
