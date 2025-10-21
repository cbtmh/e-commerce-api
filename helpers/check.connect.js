'use strict'

const mongoose = require('mongoose');
const _SECOND = 5000;
const os = require('os');
const process = require('process');
const { set } = require('../app');
//check count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections:${numConnection}`);
}

//check over load
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length; // number of cores in your machine
        const memoryUsage = process.memoryUsage().rss; // number of memory used
        //example maximun number of connections based on number of cores
        const maxConnections = numCores * 5;

        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`); // 1 MB = 1024 * 1024 bytes

        if (numConnection > maxConnections) {
            console.log('Server is overloaded');
        }
    }, _SECOND) //check every _SECOND milliseconds
};
module.exports = { countConnect, checkOverload }