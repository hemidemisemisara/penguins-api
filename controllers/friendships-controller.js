const fs = require("fs");

function loadUsers() {
  const users = JSON.parse(fs.readFileSync("./data/users.json"));
  return users;
}

const friendshipDetails = async (_req, res) => {
  const users = loadUsers();

  res.send(users[1]["profile-photo"]);
  // res.json({
  //   message: "this is the friendships route, showing friendship details 👯",
  //   user: users,
  //   image: users[1]["profile-photo"],
  // });
};

module.exports = {
  friendshipDetails,
};
