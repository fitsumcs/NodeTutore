require('./DB/mongooseConnections');
const userrouter = require('./routers/user');
const taskrouter = require('./routers/task');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send("Get Request Disabled");
//     } else {
//         next();
//     }

// });

// setting 
app.use(express.json());
app.use(userrouter);
app.use(taskrouter);




app.listen(port, () => console.log("Server Has started at port : " + port));