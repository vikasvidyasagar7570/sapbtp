const cds = require('@sap/cds');
 
module.exports = cds.service.impl(async function () {
  const { Location } = this.entities;

  this.on('READ', Location, async (req) => {
    const place = req.data.place;
    if (!place){
      return "please enter any  place";
    } 
    const url =
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=1`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'SAP-CAP-Application'
      }
    });
    const data = await response.json();
    if (!data.length) return [];
    return [{
      place: place,
      lat: data[0].lat,
      lon: data[0].lon
    }];
  });

});
 