const { z } = require("zod");
// zod ko import karwaya hai 
// Creating an object schema and validate the input for signup page
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(20, { message: "Name must not be more than 20 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(50, { message: "Email must not be more than 50 characters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .regex(/^[+-]?\d+(\.\d+)?$/, {
      message: "Only valid numbers are allowed",
    })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least of 6 characters" })
    .max(12, "Password can't be greater than 12 characters"),
});

// ab hum signin page ko validate kare ge 
const signinSchema = z.object({
  email: z
  .string({ required_error: "Email is required" })
  .trim()
  .email({ message: "Invalid email address" })
  .min(5, { message: "Email must be at least of 5 characters" })
  .max(50, { message: "Email must not be more than 50 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least of 6 characters" })
    .max(12, "Password can't be greater than 12 characters"),
})

module.exports = {signupSchema, signinSchema}; 
// isse hum router ke ander auth-route me import kare ge 