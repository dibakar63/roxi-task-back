const express = require('express');
const cors=require("cors");
let connectDb=require('./db.js');
const authRoute=require('./router.js');

const app = express();
connectDb()
const url="https://s3.amazonaws.com/roxiler.com/product_transaction.json";
app.use(cors({
    origin:"http://localhost:3000"
}
))


app.use('/api/v1',authRoute);

app.listen(3001, () => {
    console.log('Proxy server is running on port 3001');
    
});
