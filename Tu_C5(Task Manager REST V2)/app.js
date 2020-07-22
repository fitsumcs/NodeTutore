const express = require('express');
require('./DB/mongooseConnections');
const userrouter = require('./routers/user');
const taskrouter = require('./routers/task');
const app = express();
const port = process.env.PORT || 5000;

// setting 
app.use(express.json());
app.use(userrouter);
app.use(taskrouter);




app.listen(port, () => console.log("Server Has started at port : " + port));