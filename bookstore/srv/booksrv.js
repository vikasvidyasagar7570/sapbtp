const cds = require('@sap/cds')
const { SELECT,INSERT, UPDATE,  } = require('@sap/cds/lib/ql/cds-ql')
module.exports = cds.service.impl(function(){
    const{Books,Orders,Payments}= this.entities


      this.on('checkStock',async(req)=>{
        const{book_id}=req.data;
        if(!book_id) req.error(400,'book_id is required')
          const book = await
        SELECT.one.from(Books).where({
            book_id
        })
        return book ? book.stock :0
      })




      this.on('placeOrder',async(req)=>{
        const{book_id, coust_id, quantity,order_id}=req.data;
        const tx=cds.transaction(req)

        const book= await tx.run(SELECT.one.from(Books).where({book_id}))
        if(!book) req.error(404,'Book not found');
        if(book.stock < quantity) req.error(400,'Insufficient Stock')

            const totalAmount = book.price * quantity;

           await tx.run(UPDATE(Books).set({stock:book.stock - quantity})
           .where({book_id}))

           await tx.run(INSERT.into(Orders).entries({
            order_id:cds.utils.uuid(),
            book_id_book_id:book_id,
            coust_id_coust_id:coust_id,
            quantity,
            total_amount:totalAmount,
            status:'Placed',
            
           }))
            await tx.run(INSERT.into(Payments).entries({
          payment_id:cds.utils.uuid(),
          order_id_order_id:order_id,
          payment_method:'ONLINE',
          payment_date: new Date().toISOString(),
          amount:totalAmount,
          status:'COMPLETED'

        }))
           return `Order placed and stock is reduced by ${quantity}`
      })
      this.before('UPDATE','Books',(req)=>{
        if(req.data.stock < 0){
            req.error(400, 'stock cannot be negative')
        }
      })
      this.after('UPDATE','Books',(data)=>{
        console.log(`Book ${data.book_id} stock Updated`)
      })
   
       



      this.on('addStock',async(req)=>{
        const{book_id, add_quantity}=req.data;

        if(!book_id || add_quantity === undefined){
          req.error(400,'book id and quantity must be required')
        }
        if(add_quantity <=0){
          req.error(400,'add_quantity must be possitive')
        }
        const tx = cds.transaction(req);
        const book = await tx.run(
          SELECT.one('stock').from(Books).where({book_id})
        )
        if(!book) req.error(404,'Book not found');

        const newStock = book.stock + Number(add_quantity);
        await tx.run( UPDATE(Books).set({stock:newStock}).where({book_id}))
       
        await tx.commit();
        return{
          book_id,
          new_stock:newStock
        }
      }
      
      )

})

