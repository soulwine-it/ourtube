import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {
        pageTitle: "Join"
    })
};
export const postJoin = (req, res) => {
    const {
        body: {
            name,
            email,
            password,
            password2
        }
    } = req;
    //비밀번호 확인
    if (password != password2) {
        //비밀번호가 다르다면 400코드 반환()
        res.status(400);
        res.render("join", {
            pageTitle: "Join"
        });

    } else {
        // To Do: Register User
        // To Do: Log user in
        res.redirect(routes.home);
    }
};


export const getLogin = (req, res) =>
    res.render("Login", {
        pageTitle: "Login"
    });

export const postLogin = (req, res) => {
    res.redirect(routes.home);
};



export const logout = (req, res) => {
    // To Do: Process Log out
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("Users", {
    pageTitle: "Users"
});
export const userDetail = (req, res) =>
    res.render("userDetail", {
        pageTitle: "User Detail"
    });

export const editProfile = (req, res) => res.render("editProfile", {
    pageTitle: "Edit Profile"
});
export const changePassword = (req, res) => res.render("changePassword", {
    pageTitle: "Change Password"
});