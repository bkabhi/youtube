import express from 'express';
import dotenv from 'dotenv';
import { connect } from './db/mongodb.js';
dotenv.config();

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
})


const PORT = 4000;
app.listen(PORT, () => {
    connect()
    console.log(`Listening on port at http://localhost:${PORT}`);
});
