//Imports
const History = require("../models/HistoryModel");

//Object
const historyCtrl = {};

//Functions

historyCtrl.getHistory = async (req, res) => {
  try {
    const histories = await History.find();
    if (histories) {
      res.json(histories); //need to change to .status(200).send(historys) after done testing with postman
    } else {
      res.status(404).send({ error: "Notes not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

historyCtrl.createHistory = async (req, res) => {
  const newHistory = new History(req.body);
  try {
    await newHistory.save();
    res.json('create history!');
    res.status(200).send({ message: "History Created" });
  } catch (error) {
    res.status(500).send(error);
  }
  
};

// historyCtrl.getHistoryBySlug = async (req, res) => {
//   try {
//     const history = await History.findOne({slug: req.params.slug});
//     res.status(200).send(post);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

historyCtrl.updateHistory = async (req, res) => {
  const { name,description,no_of_findings } = req.body;
  try {
    await History.findOneAndUpdate(
      { _id: req.params.id },
      {  name, description, no_of_findings }
    );
    res.status(200).send({ message: "History update successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

historyCtrl.deleteHistory = async (req, res) => {
  try {
    await History.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "History deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = historyCtrl;