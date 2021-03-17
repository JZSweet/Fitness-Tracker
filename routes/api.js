const exercises = require("../db/exercises");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const allExercises = await exercises.find();
  res.json(allExercises);
});

router.post("/", async (req, res) => {
    try{
  const newExercise = await exercises.create(req.body);
  res.status(201);
  res.send(`Exercises with id: ${newExercise.id} was created!`);
    }catch(err) {
        res.status('403')
        res.send(`Failed with: ${err}`)
    }

});

module.exports = router;
