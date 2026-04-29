require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth-routes');
const contactRouter = require('./routes/contact-routes');
const serviceRouter = require("./routes/service-routes");
const adminRouter = require("./routes/admin-routes");
const connectDB = require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');



const app = express();
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("<h1>This is the home page</h1>");
});

app.get("/health", (req, res) => {
    res.send("<h1>This is the health page</h1>");
});

app.use('/api/auth', authRouter);
app.use('/api/form', contactRouter);
app.use('/api/services',serviceRouter)
app.use('/api/admin',adminRouter)




app.use(errorMiddleware);


const PORT = 5000 || process.env.PORT


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`your server is running at ${PORT}`);
    })
})