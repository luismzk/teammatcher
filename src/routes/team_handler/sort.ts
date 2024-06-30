import express from "express";
const router = express.Router();

const { teamSorter } = require("./utils");

router.get("/sortTeams", async function (req, res) {
  try {
    const level1 = req.query.level1 || [];
    const level2 = req.query.level2 || [];
    const level3 = req.query.level3 || [];
    const level4 = req.query.level4 || [];
    const level5 = req.query.level5 || [];
    const sortedTeams = teamSorter(
      level1,
      level2,
      level3,
      level4,
      level5,
      req.query.teamCount
    );

    return res.send(sortedTeams);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

export const sortRoutes = router;
