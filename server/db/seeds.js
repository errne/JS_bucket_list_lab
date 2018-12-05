use bucketList;
db.dropDatabase();

db.items.insertMany(
  [
    {
      goal: "Finish the lab",
      done: false
    },
    {
      goal: "Play ping pong",
      done: true
    },
    {
      goal: "Beat Jake at Ping Pong",
      done: false
    }
  ]
);
