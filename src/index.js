import express from "express";
import morgan from "morgan";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`server listener in port ${port}`)
})