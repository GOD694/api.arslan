
// ==========================================
// verify admin is or not using the middleware
// ==========================================

const verifyAdminMiddleware = (req, res, next) => {
    try {
        const isAdmin = req.isAdmin;
        if (!isAdmin) {
            return res.status(403).json({ msg: "you are not authorized to access this route" });
        }
        return next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ msg: "you are not authorized to access this route" });

    }
};



module.exports = verifyAdminMiddleware;