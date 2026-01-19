const cds = require('@sap/cds');
const v2proxy= require('@sap/cds-odata-v2-adapter-proxy')

cds.on('bootstrap',app=>{
    app.use(v2proxy())
})
module.exports = cds.server;
