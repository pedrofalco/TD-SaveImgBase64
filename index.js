//IMPORTAR EXPRESS Y NEDB
const express = require('express');
const Datastore = require('nedb');

//EXPRESS
const app = express();
const server = app.listen(1111, () => console.log('listening @ 1111 --> http://localhost:1111'));
app.use(express.json({
    limit: '10mb'
}));

//NEDB
const database = new Datastore('database.db');
database.loadDatabase();

//POST API ENDPOINT
app.post('/save-img', (request, response) => {

    //REQUEST
    const data = request.body;
    console.log(`post message: ${JSON.stringify(data)}`);

    //PROCESS
    database.insert(data);

    data.success = "success";

    //RESPONSE
    response.json({
        "status": data.success,
        "name": data.name
    });
});

//GET API ENDPOINT
app.get('/api', (request, response) => {
    //DATABASE QUERY
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    });
});