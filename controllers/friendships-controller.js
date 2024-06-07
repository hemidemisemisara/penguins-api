const knex = require("knex")(require("../knexfile"));

async function loadFriendship(friendshipId) {
  try {
    const allFriendships = await knex("friendships");
    const friendship = allFriendships.find(
      (friendship) => friendship.id === friendshipId
    );
    return friendship;
  } catch (error) {
    console.error("error retrieving data from friendships", error);
  }
}

async function loadUser(userId) {
  try {
    const allUsers = await knex("users");
    const user = allUsers.find((user) => user.id === userId);
    return user;
  } catch (error) {
    console.error("error retrieving data from users", error);
  }
}

async function loadLetters(friendshipId) {
  try {
    const allLetters = await knex("letters");
    const letters = allLetters.filter(
      (letter) => letter["friendship-id"] === friendshipId
    );
    return letters;
  } catch (error) {
    console.error("error retrieving data from letters", error);
  }
}

async function loadMemories(friendshipId) {
  try {
    const allMemories = await knex("memories");
    const memories = allMemories.filter(
      (letter) => letter["friendship-id"] === friendshipId
    );
    return memories;
  } catch (error) {
    console.error("error retrieving data from letters", error);
  }
}

async function loadThingsInCommon(friendshipId) {
  try {
    const allThingsInCommon = await knex("things-in-common");
    const thingsInCommon = allThingsInCommon.filter(
      (thing) => thing["friendship-id"] === friendshipId
    );
    return thingsInCommon;
  } catch (error) {
    console.error("error retrieving data from things-in-common", error);
  }
}

async function loadFirstImpressions(friendshipId) {
  try {
    const allFirstImpressions = await knex("first-impressions");
    const firstImpressions = allFirstImpressions.filter(
      (firstImpression) => firstImpression["friendship-id"] === friendshipId
    );
    return firstImpressions;
  } catch (error) {
    console.error("error retrieving data from first-impressions", error);
  }
}

async function loadHowWhere(friendshipId) {
  try {
    const howWheres = await knex("how-where");
    const howWhere = howWheres.find(
      (howWhere) => howWhere["friendship-id"] === friendshipId
    );
    return howWhere;
  } catch (error) {
    console.error("error retrieving data from how-where", error);
  }
}

const friendshipDetails = async (req, res) => {
  try {
    const friendshipId = req.params.id;
    const friendship = await loadFriendship(friendshipId);
    if (friendship) {
      const userOneId = friendship["user-one"];
      const userTwoId = friendship["user-two"];
      const userOne = await loadUser(userOneId);
      const userTwo = await loadUser(userTwoId);
      const letters = await loadLetters(friendshipId);
      const memories = await loadMemories(friendshipId);
      const thingsInCommon = await loadThingsInCommon(friendshipId);
      const firstImpressions = await loadFirstImpressions(friendshipId);
      const howWhere = await loadHowWhere(friendshipId);

      const response = {
        "friendship-id": friendshipId,
        users: [
          {
            id: userOneId,
            "first-name": userOne["first-name"],
            profile: userOne["profile-photo"],
            timezone: userOne["timezone"],
            location: userOne["location"],
          },
          {
            id: userTwoId,
            "first-name": userTwo["first-name"],
            profile: userTwo["profile-photo"],
            timezone: userTwo["timezone"],
            location: userTwo["location"],
          },
        ],
        "friends-since": friendship["friends-since"],
        letters: letters,
        memories: memories,
        "things-in-common": thingsInCommon,
        "first-impressions": firstImpressions,
        "how-where": howWhere,
      };
      res.json(response);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving friendship data" });
  }
};

module.exports = {
  friendshipDetails,
};
