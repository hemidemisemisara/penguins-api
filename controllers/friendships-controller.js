const fs = require("fs");

function loadFriendship(friendshipId) {
  const allfriendships = JSON.parse(fs.readFileSync("./data/friendships.json"));
  const friendship = allfriendships.find(
    (friendship) => friendship.id === friendshipId
  );
  return friendship;
}

function loadUser(userId) {
  const allUsers = JSON.parse(fs.readFileSync("./data/users.json"));
  const user = allUsers.find((user) => user.id === userId);
  return user;
}

function loadLetters(friendshipId) {
  const allLetters = JSON.parse(fs.readFileSync("./data/letters.json"));
  const letters = allLetters.filter(
    (letter) => letter["friendship-id"] === friendshipId
  );
  return letters;
}

function loadMemories(friendshipId) {
  const allMemories = JSON.parse(fs.readFileSync("./data/memories.json"));
  const memories = allMemories.filter(
    (letter) => letter["friendship-id"] === friendshipId
  );
  return memories;
}

function loadThingsInCommon(friendshipId) {
  const allThingsInCommon = JSON.parse(
    fs.readFileSync("./data/things-in-common.json")
  );
  const thingsInCommon = allThingsInCommon.filter(
    (thing) => thing["friendship-id"] === friendshipId
  );
  return thingsInCommon;
}

function loadFirstImpressions(friendshipId) {
  console.log("friendshipId: ", friendshipId);
  const allFirstImpressions = JSON.parse(
    fs.readFileSync("./data/first-impressions.json")
  );
  const firstImpressions = allFirstImpressions.filter(
    (firstImpression) => firstImpression["friendship-id"] === friendshipId
  );
  return firstImpressions;
}

function loadHowWhere(friendshipId) {
  const howWheres = JSON.parse(fs.readFileSync("./data/how-where.json"));
  const howWhere = howWheres.find(
    (howWhere) => howWhere["friendship-id"] === friendshipId
  );
  return howWhere;
}

const friendshipDetails = async (req, res) => {
  try {
    const friendshipId = Number(req.params.id);
    const friendship = loadFriendship(friendshipId);
    const userOneId = friendship["user-one"];
    const userTwoId = friendship["user-two"];
    const userOne = loadUser(userOneId);
    const userTwo = loadUser(userTwoId);
    const letters = loadLetters(friendshipId);
    const memories = loadMemories(friendshipId);
    const thingsInCommon = loadThingsInCommon(friendshipId);
    const firstImpressions = loadFirstImpressions(friendshipId);
    console.log("firstImpressions: ", firstImpressions);
    const howWhere = loadHowWhere(friendshipId);

    const response = [
      {
        "friendship-id": friendshipId,
        "user-1-first-name": userOne["first-name"],
        "user-1-profile": userOne["profile-photo"],
        "user-2-first-name": userTwo["first-name"],
        "user-2-profile": userTwo["profile-photo"],
        "friends-since": friendship["friends-since"],
        letters: letters,
        memories: memories,
        "things-in-common": thingsInCommon,
        "first-impression": firstImpressions,
        "how-where": howWhere,
      },
    ];

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving friendship data" });
  }
};

module.exports = {
  friendshipDetails,
};
