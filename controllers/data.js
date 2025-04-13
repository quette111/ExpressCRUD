const express = require('express');

let { sosaData } = require('../CK.js');

const getFile = (req, res) => {res.json(sosaData)}

const postFile = (req, res) => {sosaData.push(req.body)
    res.send(sosaData)
   }

const deleteFile = (req, res) => {

   sosaData = sosaData.filter(song => song.id !== parseInt(req.params.id));
    res.send(sosaData)
}

module.exports = { getFile, postFile, deleteFile }
