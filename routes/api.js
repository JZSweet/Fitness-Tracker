const db = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
    const allExercises = await db.Workout.find();
    res.json(allExercises);
});

router.post("/", async (req, res) => {
    try {
        const newExercise = await db.Workout.create(req.body);
        res.status(201);
        res.send(`Exercises with id: ${newExercise.id} was created!`);
    } catch (err) {
        res.status('403')
        res.send(`Failed with: ${err}`)
    }
});

router.get("/workouts", async (req, res) => {
    const allExercises = await db.Workout.find();
    res.json(allExercises);
});

router.get("/workouts/range", async (req, res) => {
    const allExercises = await db.Workout.find();
    res.json(allExercises);
  });

module.exports = router;
