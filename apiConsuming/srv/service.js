const cds = require("@sap/cds");
 
module.exports = cds.service.impl(async function(){
const bp = await cds.connect.to("API_PARTNERCOMPANY_SRV");
    const {partner} = this.entities;
 
      this.on("READ",partner,async (req)=>{

    const data = await bp.run(req.query);
    return data;

 }
)
})