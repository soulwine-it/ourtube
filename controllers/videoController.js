export const home = (req, res) => res.render("home", {
    pageTitle: "Home"
});
export const search = (req, res) => res.render("Search", {
    pageTitle: "Search"
});

export const videos = (req, res) => res.render("Videos", {
    pageTitle: "videos"
});
export const upload = (req, res) => res.render("Upload", {
    pageTitle: "upload"
});
export const videoDetail = (req, res) => res.render("Video Detail", {
    pageTitle: "videoDetail"
});
export const editVideo = (req, res) => res.render("Edit Video", {
    pageTitle: "editVideo"
});
export const deleteVideo = (req, res) => res.render("Delete Video", {
    pageTitle: "deleteVideo"
});