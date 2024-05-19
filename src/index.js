const express = require('express');
const { server, Logger }  = require('./config');
const apiRoutes = require('./routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoutes);  // whenever a request has '/api' it will redirect it to apiRoutes -> routes/index.js

app.listen(server.PORT , () =>{
    console.log(`Listening to ${server.PORT}`);
    Logger.info('Connection established....','root',{});
})
