const express = require('express');
const { server, Logger }  = require('./config');
const apiRoutes = require('./routes');
const city = require('./models/city');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',apiRoutes);  // whenever a request has '/api' it will redirect it to apiRoutes -> routes/index.js

app.listen(server.PORT , async () =>{
    console.log(`Listening to ${server.PORT}`);
    Logger.info('Connection established....','root',{});

    const{Airport, City} = require('./models');
    // const delhi = await City.findByPk(5);
    // console.log(delhi);
    // let res = await Airport.create({name : 'Indira Gandhi International Airport', code : 'DEL', cityId : 5}); //throw error as no cityId passed
    // const res = await delhi.createAirport({name : 'Kempoogawde Airport', code : 'BLR'});
    // console.log(res);
   
    // const dels = await Airport.findByPk(3);
    // console.log(dels);
    // const ress = await delhi.removeAirport(dels);
    // console.log(ress);

    // await City.destroy({
    //     where : {
    //         id:4
    //     }
    // })
})
