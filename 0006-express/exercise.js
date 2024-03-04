"use strict";
const express = require('express');
const axios = require('axios');
const convert = require('xml-js');
// import { json2xml } from "xml-js";


const app = express();
const usersRouter = express.Router();

app.use((req, res, next) => {
    if(req.headers.authorization !== 'Bearer 123') {
        return res.status(401).send('unauthorized, get the f*ck outta here niqqa')
    }
    console.log('authorization success, lets goooooooooo')
    next()
})

app.use('/users', usersRouter);

usersRouter.get('/', async (req, res, next) => {
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    // console.log(response.data);
    const format = req.query.format
    const offset = +req.query.offset
    const limit = +req.query.limit
    const data = response.data.slice(offset - 1, offset + limit)
    console.log(data)
    res.setHeader('Content-Type', `text/${format}`);
    if (format === 'xml') {
        const xml = convert.json2xml(data, {
            compact: true
        });
        return res.status(200).send(xml)
    }
    res.json(data)
    // next()
})

app.listen(80, () => {
    console.log('started...')
})
