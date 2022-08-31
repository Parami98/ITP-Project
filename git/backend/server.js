const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//import routes
const crewRoutes = require('./routes/crews');
const salaryRoutes = require('./routes/salaries');

//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use("/crew",crewRoutes);
app.use("/salary" ,salaryRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://user:skyline8@skyline.ymebi.mongodb.net/Skyline_DB?retryWrites=true&w=majority'
const DB_URL1= 'mongodb+srv://randima:Randima123456@cluster.mze9h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('DB Connected.');
})
.catch((err)=> console.log('DB Connection error',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});