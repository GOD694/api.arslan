const jwt = require("jsonwebtoken");
const user = require("../models/auth-model")
const authverifymiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    
    if (!token) {
      return res.status(401).json({ msg: "Unauthorized token  here " });
    }
    const realtoken = token.replace("Bearer ", "");

    // verify the token and get the decoded payload and find id
    const decoded = jwt.verify(realtoken, process.env.JWT_KEY);
    const userInfo = await user.findOne({ email: decoded.email }).select({ password: 0 })

    // custom properties to req object 
    req.username = userInfo.username;
    req.userId = userInfo._id.toString();
    req.email = userInfo.email;
    req.phone = userInfo.phone;
    req.isAdmin = decoded.isAdmin;
    return next(); // ✔️ Correct
  } catch (error) {
    return res.status(401).json({ msg: "unuthorized token" });
  }
};


module.exports = authverifymiddleware;