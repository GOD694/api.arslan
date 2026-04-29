



// ================================
// validate user input for registration and login
// ================================

const validate = (schema) => async (req, res, next) => {
try {
    const validatedData = await schema.parseAsync(req.body);
    req.body = validatedData;
    next()
} catch (err) {
    const status =  400;
  const message = err.issues[0].message;
       const error ={
        message,
        status
        
       }

       next(error);
}
}


module.exports =  validate 