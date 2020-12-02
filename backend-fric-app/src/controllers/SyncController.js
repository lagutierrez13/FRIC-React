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
syncCtrl.updateFinding = (io,F) => {
    let result;
    Finding.findOneAndUpdate({ _id:F.id }, F, { new:true }, (err,finding) => {
      if(err){
        result = {'success':false,'message':'Could not update finding.','error':err};
        console.log(result);
      }
      else{
          result = {'success':true,'message':'Finding Updated Successfully',finding};
          io.emit('FindingUpdated', result);
      }
    })
  }
module.exports = syncCtrl;