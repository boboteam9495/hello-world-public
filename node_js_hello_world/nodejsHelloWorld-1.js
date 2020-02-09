// https://www.youtube.com/watch?v=pKd0Rpw7O48

const Joi = require('joi'); // data validation packages
const express = require('express'); // node js backend framework
const app = express();

app.use(express.json()); //json format for get, put, post, delete operation

// not involve any database connection, so assume this is data from database.
const admins = [
    {id: 1, name: "Aaron"},
    {id: 2, name: "Ban"},
    {id: 3, name: "Kingx"}
];

app.get('/', (req, res) => {
    res.send('Hello world, Bobo team members');
});

app.get('/api/admin/:id', (req, res) => {
    const admin = admins.find(a => a.id === parseInt(req.params.id));
    if (!admin) return res.status(400).send("admin id was not exist.");
    res.send(`The admin is ${admin.name}`);
});

app.post('/api/admin/:id', (req,res) => {
    const {error} = validateName(req.body); // let say, var result = ..., this line is equivalent to var error = result.error
    if (error) return res.status(400).send(error.details[0].message);
    const admin = {
        id: admins.length + 1, // this logic is flaw, when we delete one admin in between. 
        name: req.body.name
    };
    admins.push(admin);
    res.send(admin);
});

app.put('/api/admin/:id', (req, res) => {
    const admin = admins.find(a => a.id === parseInt(req.params.id));
    if (!admin) return res.status(400).send('Admin id was not found.');
    
    const {error} = validateName(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    admin.name = req.body.name;
    res.send(admin);
});

app.delete('/api/admin/:id', (req, res) => {
    const adminIndex = admins.findIndex(a => a.id === parseInt(req.params.id));
    if (adminIndex === -1) return res.status(400).send('Admin id was not exist.');

    const deletedAdminName = admins[adminIndex].name;
    admins.splice(adminIndex, 1);
    res.send(`Admin ${deletedAdminName} was deleted.`);
});

const port = process.env.Port|| 3000; // port 3000 not necessarily available in  
app.listen(3000, () => {console.log(`Listening to port ${port}...`)}); 

function validateName(name) {
    var schema = Joi.object().keys({
        name: Joi.string().min(3).required() // name must exist, and > 3 character
      }
    )
    return Joi.validate(name, schema)
} 