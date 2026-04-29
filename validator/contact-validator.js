const { z } = require("zod");
// zod ko import karwaya hai 
// Creating an object schema and validate the input for contact page
const formSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters" })
    .max(50, { message: "Name must not be more than 50 characters" }),
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
  userText: z
    .string({ required_error: "text is required" })
    .min(7, { message: "text must be at least of 6 characters" })
    .max(1024, "text can't be greater than 1024 characters"),
});



module.exports = {formSchema}; 
// isse hum router ke ander contact-route me import kare ge 