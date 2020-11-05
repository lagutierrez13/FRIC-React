//Imports
const Configuration = require("../models/ConfigurationModel");

//Object
const configurationCtrl = {};

//Functions
configurationCtrl.getConfigurations = async (req, res) => {
  try {
    const configuration = await Configuration.find();
    if (configuration) {
      res.json(configuration); //need to change to .status(200).send(systems) after done testing with postman
    } else {
      res.status(404).send({ error: "Configurations not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// configurationCtrl.getConfiguration = async (tablename, res) => {
//   try {
//     const configuration = await Configuration.findOne({
//       tablename,
//     });
//     if (configuration) {
//       res.status(200).send(configuration); //need to change to .status(200).send(systems) after done testing with postman
//     } else {
//       res.status(404).send({ error: "Notes not found" });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

configurationCtrl.getConfiguration = async (req, res) => {
  await Configuration.findOne(
    { tablename: req.params.tablename },
    (err, configuration) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!configuration) {
        return res
          .status(404)
          .json({ success: false, error: `Configuration not found` });
      }
      return res.json(configuration);
    }
  ).catch((err) => console.log(err));
};

// configurationCtrl.authenticateConfiguration = async (initials) => {
//   const configuration = await Configuration.findOne({
//     initials,
//   });
//   if (configuration) {
//     const isMatched = await bcrypt.compare(initials, configuration.initials);
//     if (isMatched) {
//       return configuration;
//     } else {
//       throw new Error("unable to log in");
//     }
//   } else {
//     throw new Error({
//       error: "unable to log in",
//     });
//   }
// };

configurationCtrl.createConfiguration = async (req, res) => {
  const newConfiguration = new Configuration(req.body);
  try {
    await newConfiguration.save();
    res.json("create configuration!");
    res.status(200).send({ message: "Configuration Created" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// systemCtrl.getSystemBySlug = async (req, res) => {
//   try {
//     const system = await System.findOne({slug: req.params.slug});
//     res.status(200).send(post);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// };

// configurationCtrl.updateConfiguration = async (req, res) => {
//   const { initials } = req.body;
//   try {
//     await Configuration.findOneAndUpdate({ _id: req.params.id }, { initials });
//     res.status(200).send({ message: "Configuration update successfully" });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

configurationCtrl.updateConfiguration = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  Configuration.findOne({ tablename: req.params.tablename }, (err, configuration) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Configuration not found!",
      });
    }
    configuration.tablename = body.tablename;
    configuration.required = body.required;
    configuration.values = body.values;
    configuration
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          tablename: configuration.tablename,
          message: "Configuration updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Configuration not updated!",
        });
      });
  });
};

configurationCtrl.deleteConfiguration = async (req, res) => {
  try {
    await Configuration.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ message: "Configuration deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//Export
module.exports = configurationCtrl;
