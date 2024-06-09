const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

const addThing = async (req, res) => {
  const newThingID = uuidv4();
  const newThing = {
    id: newThingID,
    "friendship-id": req.body["friendship-id"],
    description: req.body.description,
  };
  console.log(newThing);
  try {
    const data = await knex("things-in-common").insert(newThing);
    console.log(data);
    res.status(200).json(newThing);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to create a new thing in common",
    });
  }
};

const deleteThing = async (req, res) => {};

module.exports = {
  addThing,
  deleteThing,
};
