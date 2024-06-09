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

const deleteThing = async (req, res) => {
  const thingId = req.params.id;
  try {
    const data = await knex("things-in-common").where("id", thingId).delete();
    if (data === 0) {
      res
        .status(404)
        .json({ message: `The thing in common with ID: ${thingId} not found` });
      return;
    } else {
      res
        .status(200)
        .json({ message: `The thing in common with ID: ${thingId} deleted` });
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Error deleting the thing in common with ID: ${thingId}`,
    });
  }
};

module.exports = {
  addThing,
  deleteThing,
};
