import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "OurTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    //미들웨어가 커넥션과 라우트 사이에 있으니까
    next();
};