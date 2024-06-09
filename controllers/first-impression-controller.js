const knex = require("knex")(require("../knexfile"));
const fs = require("fs");

const firstImpressionUpdate = async (req, res) => {
  try {
    const firstImpressionID = req.params.id;
    const { title, description, originalFileName } = req.body;

    let updateData = {
      description: description,
      "image-title": title,
    };

    if (req.file) {
      const imageFileName = req.file.filename;
      const imageUrl = `http://localhost:8080/images/first-impressions/${imageFileName}`;
      updateData.image = imageUrl;
      // remove the original image from the folder
      fs.unlinkSync(`public/images/first-impressions/${originalFileName}`);
    }

    const data = await knex("first-impressions")
      .where({ id: firstImpressionID })
      .update(updateData);
    console.log("data:", data);

    res.status(200).json({
      message: "Updated first impression successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Unable to update first impression",
    });
  }
};

module.exports = {
  firstImpressionUpdate,
};
