import express from "express";
import bodyParser from "body-parser";
import mailRoute from './routes/message'


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use("/mail", mailRoute);

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});