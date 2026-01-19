const cds = require('@sap/cds');
const axios = require('axios');
const fs = require('fs');
 
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const FILE_PATH = './crud-result.txt';
 

function writeToFile(operation, data) {
  const content = `

OPERATION : ${operation}
TIME      : ${new Date().toISOString()}
RESULT    : ${JSON.stringify(data, null, 2)}

`;
  fs.appendFileSync(FILE_PATH, content);
}

module.exports = cds.service.impl(function () {
  this.on('READ', 'Posts', async (req) => {
    if (req.data.id) {
      const res = await axios.get(`${API_URL}/${req.data.id}`);
      writeToFile('READ_BY_ID', res.data);
      return res.data;
    }
 
    
    const res = await axios.get(API_URL);
    writeToFile('READ_ALL', res.data);
    return res.data;
  });
 
  
  this.on('CREATE', 'Posts', async (req) => {
    const res = await axios.post(API_URL, req.data);
    writeToFile('CREATE', res.data);
    return res.data;
  });
 
 
  this.on('UPDATE', 'Posts', async (req) => {
    const res = await axios.put(`${API_URL}/${req.data.id}`, req.data);
    writeToFile('UPDATE', res.data);
    return res.data;
  });
 
  
  this.on('DELETE', 'Posts', async (req) => {
    const res = await axios.delete(`${API_URL}/${req.data.id}`);
    writeToFile('DELETE', { id: req.data.id, status: res.status });
    return { success: true };
  });
 
});

