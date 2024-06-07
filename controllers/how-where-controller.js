const knex = require("knex")(require("../knexfile"));
const fs = require("fs");

const howWhereUpdate = async (req, res) => {
  try {
    const howWhereID = req.params.id;
    const { title, description, originalFileName } = req.body;

    let updateData = {
      description: description,
      "image-title": title,
    };

    if (req.file) {
      const imageFileName = req.file.filename;
      const imageUrl = `http://localhost:8080/images/how-where/${imageFileName}`;
      updateData.image = imageUrl;
      // remove the original image from the folder
      fs.unlinkSync(`public/images/how-where/${originalFileName}`);
    }

    const data = await knex("how-where")
      .where({ id: howWhereID })
      .update(updateData);
    console.log("data:", data);

    res.status(200).json({
      message: "Updated how & where successfully",
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
