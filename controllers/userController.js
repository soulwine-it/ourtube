export const join = (req, res) => res.render("Join", {
    pageTitle: "Videos"
});
export const login = (req, res) => res.render("Login", {
    pageTitle: "Login"
});
export const logout = (req, res) => res.render("Logout", {
    pageTitle: "Logout"
});

export const users = (req, res) => res.render("Users", {
    pageTitle: "Users"
});
export const userDeatil = (req, res) => res.render("user Detail", {
    pageTitle: "User Detail"
});
export const editProfile = (req, res) => res.render("edit Profile", {
    pageTitle: "Edit Profile"
});
export const changePassword = (req, res) => res.render("change Password", {
    pageTitle: "Change Password"
});