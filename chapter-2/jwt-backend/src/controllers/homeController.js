import userServices from "../services/userServices";

const handleHome = (req, res) => {
	return res.render("home.ejs");
};

const handleLogin = (req, res) => {
	return res.render("login.ejs");
};

const handleUserPage = async (req, res) => {
	let userList = await userServices.getAllUsers();

	return res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	let username = req.body.username;

	userServices.createNewUser(email, password, username);

	console.log("create new user: ", req.body);
	return res.redirect("/users");
};

const handleDeleteUser = async (req, res) => {
	// console.log(">>> handle delete user: ", req.params.id);
	const userID = req.params.id;
	await userServices.deleteUser(userID);
	return res.redirect("/users");
};

const handleUpdateUser = async (req, res) => {
	let email = req.body.email;
	let username = req.body.username;
	const id = req.body.id;
	await userServices.updateUser(id, email, username);

	return res.redirect("/users");
};

const handleUpdatePageUser = async (req, res) => {
	const userID = req.params.id;
	let user = await userServices.getUserById(userID);

	// let userData = {};
	// if (user && user.length > 0) {
	// 	userData = user[0];
	// }

	// console.log("🚀 ~ file: homeController.js:42 ~ handleUpdatePageUser ~ user:", user);

	return res.render("user-update.ejs", { user });
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
