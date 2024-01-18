const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const express = require(`express`);
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const app = express();
require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);

//if any of the route is not found
app.use(notFound)
app.use(errorHandlerMiddleware)

app.use

//port listening
const port = 3000;

//start 
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is listening one the port ${port}...`)
        })

    } catch (error) {
        console.log(error)

    }
}
start();