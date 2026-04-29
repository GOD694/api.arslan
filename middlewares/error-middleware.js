const errorMiddleware = (err, req, res, next) => {

// declare status 
    const status = err.status || 500;
// declare message
    const message = err.message || 'Internal Server Error';
    const extradetails = err.extraDetails || "Backend error";
// send response
    return res.status(status).json({
        error: {
            message: message,
            extraDetails: extradetails,
           
        }
    });


}

module.exports = errorMiddleware;