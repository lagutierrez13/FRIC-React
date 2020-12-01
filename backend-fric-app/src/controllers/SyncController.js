// ./express-server/controllers/todo.server.controller.js
//import mongoose from 'mongoose';
//import models
const Finding = require("../models/FindingModel");

const syncCtrl = {};

// export const getTodos = (req,res) => {
//   Todo.find().exec((err,todos) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }
// return res.json({'success':true,'message':'Todos fetched successfully',todos});
//   });
// }
syncCtrl.addFinding = (io,finding) => {
    let result;
    const newFinding = new Finding(finding);
    newFinding.save((err,finding) => {
    if(err){
        result = {'success':false,'message':'Some Error','error':err};
        console.log(result);
    }
    else{
        const result = {'success':true,'message':'Finding Added Successfully',finding}
        io.emit('FindingAdded', result);
    }
  })
};
module.exports = syncCtrl;