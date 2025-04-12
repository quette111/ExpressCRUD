const { sosaData } = require('../CK.js')





const getData =  (req, res) => {res.json(sosaData)}

const postData = (req, res) => {



    sosaData.push(req.body)
    res.end()
} 


const deleteData = (req, res) => {
    const id = parseInt(req.params.id)

    const person = sosaData.find((sosa)=> {sosa.id === id})

    if(!person){
        return res.status(404).json({"BangBng": `No data with ${id}`})
    }
   const NEW = sosaData.filter((people)=> {people.id !== id })

   return res.status(200).json({success: true, data: NEW });
}

module.exports = {getData, postData, deleteData}