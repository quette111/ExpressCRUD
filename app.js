const express = require('express');
const app = express();
const PORT = 3000;

const {mon} = require('./mongoose/mongoose.js')
const { router } = require('./routers/router.js')
app.use('/api/v1/data',router)
app.use(express.json())
app.use(mon)

app.get('/', (req,res)=>{
    console.log('Gucci mane love javascript')
})





app.listen(PORT, ()=>{
    console.log(`GUCCI GOT SOME YOUNG NIGGAS JR CODE APPRENTICES ON PORT:${PORT} . . . `)
})
