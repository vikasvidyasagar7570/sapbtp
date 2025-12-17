const cds =require('@sap/cds')
const { UPDATE } = require('@sap/cds/lib/ql/cds-ql')
class CatalogService extends cds.ApplicationService{ async init(){
    const db = await cds.connect.to('db')
    const {Books} = db.entities

    this.on ('submitOrder', async req =>{
        const{book,quantity}=req.data
        const n =await UPDATE (Books, book)
        .with({ stock:{'-=':quantity}})
        .where({ stock:{'>=':quantity}})
        n > 0 || req.error (409,`${quantity} excedes stock for book #${book}`)
    })

    this.after('each','Books', book=>{
        if (book.stock > 111) book.title += `-- 11% discount`
    })
    return super.init()
}}
module.exports =CatalogService