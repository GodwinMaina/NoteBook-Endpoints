
// import dotenv from 'dotenv'
// dotenv.config({ path: '../../.env' });



export const sqlConfig = {
    user:'sa',
    password:'atopwudan',
    database: 'NOTEBOOK',
    server: 'DESKTOP-8U9CNUE',

    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}


console.log(sqlConfig)