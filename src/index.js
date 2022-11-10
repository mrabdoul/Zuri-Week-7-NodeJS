const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const todoRoute = require('./router/todoRoute')

connect();


const app = express();

app.use(json());
app.use("/todo", todoRoute);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('MongoDB running');
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})