const express = require('express');

const { sosaData } = require('../CK.js');

const getFile = (req, res) => {res.json(sosaData)}

const postFile = (req, res) => {sosaData.push(req.body)
    res.send(sosaData)
   }

const deleteFile = (req, res) => {

const iden = sosaData.find((sosa)=> {sosa.id === id})
        const isFilt = (num) => {
            if(num != req.params.id){

        } else {return num != req.params.id}
    }
 res.send(sosaData.filter(isFilt))

}

module.exports = { getFile, postFile, deleteFile }
