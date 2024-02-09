"use strict";
// import dotenv from 'dotenv'
// dotenv.config({ path: '../../.env' });
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
exports.sqlConfig = {
    user: 'sa',
    password: 'atopwudan',
    database: 'NOTEBOOK',
    server: 'DESKTOP-8U9CNUE',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
console.log(exports.sqlConfig);
