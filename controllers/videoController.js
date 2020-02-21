import routes from "../routes.js";


export const home = (req, res) => {
    res.render("home", {

        pageTitle: "Home",
        videos

    });
};
export const search = (req, res) => {
    //es6 (req.query.term)
    const {
        query: {
            term: searchingBy
        }
    } = req;

    res.render("search", {
        pageTitle: "Search",
        searchingBy: searchingBy,
        videos
    });
};


export const getUpload = (req, res) => res.render("upload", {
    pageTitle: "Upload"
});
export const postUpload = (req, res) => {
    const {
        body: {
            file,
            title,
            description
        }
    } = req;
    // To Do Upload and save video
    res.redirect(routes.videoDetail(31));
};

export const videoDetail = (req, res) => res.render("videoDetail", {

    pageTitle: "VideoDetail"
});
export const editVideo = (req, res) => res.render("editVideo", {

    pageTitle: "EditVideo"
});
export const deleteVideo = (req, res) => res.render("deleteVideo", {

    pageTitle: "DeleteVideo"
});