import express from 'express';
import { Kafka } from 'kafkajs';

import routes from '../src/routes.js';

const app = express();

//connects to kafka
const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
});

const producer = kafka.producer()

//Provides producer for all routes
app.use((req, res, next) => {
    req.producer = producer;

    return next();
})

//registers application routes
app.use(routes)

async function run() {
    await producer.connect()

    app.listen(3333);
}

run().catch(console.error)


