const cds = require('@sap/cds');
const axios = require('axios');
 
module.exports = cds.service.impl(function () {
 
  this.on('READ', 'SalesContracts', async () => {
    const response = await axios.get(
      'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_SALES_CONTRACT_SRV/A_SalesContract',
      {
        headers: {
          'APIKey': 'jDodTAdRm0ARZgZdZA49Rlb5fRJAk5vi',
          'Accept':'application/json'
        }
      }
    );
 
    
    return response.data.d.results;
  });
 
});