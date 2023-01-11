import express from 'express';
import cors from 'cors';
import https from 'https';

const app = express();
const route = express.Router();
const port = process.env.PORT || 8080;

app.use(cors());
const corsOptions = {
    origin: "http://127.0.0.1:5500/",
    credentials:true,
};

app.get("/getPincode", function (req, res) {
    console.log("calling api");
    // https.get('https://api.ip2location.com/v2/?key=demo&format=json&package=WS25', (resp) => {
    //     let data = '';
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });
    //     resp.on('end', () => {
    //         console.log(JSON.parse(data));
    //         res.send(JSON.parse(data));
    //     });

    // }).on("error", (err) => {
    //     res.send(err.message);
    // });
})

app.use("/api", route);

app.listen(port, function () {
    console.log("server started");
})