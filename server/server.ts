import * as express from 'express';
import {Application} from "express";
import {loginUser} from "./auth.route";

const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

const httpServer:any = app.listen(PORT, () => {
    console.log('Server running at http://localhost:' + httpServer.address().port);
});