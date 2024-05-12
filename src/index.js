const express = require('express');
const { server, logger }  = require('./config');
const apiRoutes = require('./routes');
const app = express();

app.use('/api',apiRoutes);  // whenever a request has '/api' it will redirect it to apiRoutes -> routes/index.js

app.listen(server.PORT , () =>{
    console.log(`Listening to ${server.PORT}`);
    logger.info('Connection established....','root',{});
})
