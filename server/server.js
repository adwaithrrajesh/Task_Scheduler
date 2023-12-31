const express = require('express');
const cors = require('cors');
const morgan  = require('morgan');
const app = express();
const dotenv = require('dotenv');
const TaskRouter = require('./routes/taskRouter')
require('./database/config')


//------------ Requiring DOTENV -----------------
dotenv.config();

//-------------- CORS --------------------


app.use(express.json());
app.use(cors({
    origin: '*',
    methods:['GET','POST','PUT','PATCH','DELETE'],
    credentials:true
}));
app.use(morgan('dev'));
app.use('/api',TaskRouter)

//-------------------------------------------- PORT --------------------------------------------

const port = 8080;



//----------------------------------------------- STARTING SERVER -------------------------------------

app.listen(port,()=>{console.log(`server started at port ${port}`);});
