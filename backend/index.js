const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config();

app.use(express.json())
app.use(cors({ 
    origin: 'http://localhost:3000', 
    credentials: true, 
    methods: ["GET", "POST", "PATCH", "DELETE"], 
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"], 
}));
app.use(cookieParser());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type,Accept"
//     );
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });

const mongoURI = process.env.MongoUrl;
const PORT = process.env.PORT;

// mongoose.connect(mongoURI)
//     .then(() => {
//         console.log("Connected successfully")
//         const fetched_data = mongoose.connection.client.db().collection('dataset');
//         fetched_data.find().toArray((err,data)=>{
//             if (err) {
//                 console.log("----",err)
//             }else{
//                 global.FashionFlair = data;
//                 console.log(global.FashionFlair)
//             }
//         }) 
//     })

// const db = mongoose.connection;

// // Access the collection directly without a model
// db.collection('dataset').find({}).fetch((err, data) => {
//     if (err) {
//         console.error('Error fetching data:', err);
//     } else {
//         console.log('Fetched data:', data);

//         // Further operations with the fetched data can be done here
//     }

// });

async function fetchData() {
    try {
        await mongoose.connect(mongoURI); // Replace mongoURI with your MongoDB connection string
        console.log("Connected successfully");

        // const collection = mongoose.connection.client.db().collection('bags');

        // const data = await collection.find().toArray(async (err,data)=>{
        //     const fashioncategory = await mongoose.connection.client.db().collection('Category')
        //     fashioncategory.find({}).toArray((err,catdata)=>{
        //         if (err) {
        //             console.log(err);
        //         }else{
        //             global.Bags = data;
        //             global.Category = catdata
        //         }
        //     })
        // });
        const collection = mongoose.connection.client.db().collection('maindataschemas');
        const data = await collection.find().toArray();

        const fashioncategory = await mongoose.connection.client.db().collection('categoryschemas')
        const catData = await fashioncategory.find().toArray();

        const testData = await mongoose.connection.client.db().collection('testimonials')
        const testimonialData = await testData.find().toArray();

        const userdata = await mongoose.connection.client.db().collection('useranddatas')
        const userData = await userdata.find().toArray();

        const order = await mongoose.connection.client.db().collection('adminorders')
        const adminorders = await order.find().toArray();
        

        if (data) {
            global.Bags = data;
            global.Category = catData;
            global.testimonial = testimonialData;
            global.User = userData;
            global.Orders = adminorders

        } else {
            console.log("No data found");
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

fetchData();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/GetCategory"))
app.use('/api', require("./Routes/CreateTestimonial"))
app.use('/api', require("./Routes/detailcategory"))
app.use('/api', require("./Routes/oneItem"))
app.use('/api', require("./Routes/Google")) 
app.use('/api', require("./Routes/adminRoutes"))
app.use('/api', require("./Routes/DisplayData"))
app.use('/api', require("./Routes/RoutesAdmin"))

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})