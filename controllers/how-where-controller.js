const knex = require("knex")(require("../knexfile"));
const path = require("path");

const howWhereUpdate = async (req, res, timestamp) => {
  try {
    console.log(req.body);
    const howWhereID = req.params.id;
    const { title, description } = req.body;
    console.log("body", req.body);
    console.log("title", title);
    console.log("description", description);
    const imageUrl = `http://localhost:8080/images/how-where/how-where-${timestamp}.jpg`;
    const data = await knex("how-where").where({ id: howWhereID }).update({
      image: imageUrl,
      description: description,
      "image-title": title,
    });
    console.log("data:", data);
    res.status(200).json({
      message: "Updated how & where succesfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to update how & where",
    });
  }
};

module.exports = {
  howWhereUpdate,
};
