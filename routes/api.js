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
    const allExercises = await db.Workout.findOne();
    res.json(allExercises);
});

router.get("/workouts/range", async (req, res) => {
    const allExercises = await db.Workout.find();
    res.json(allExercises);
});

// router.post("/workouts", async (req, res) => {
// 
// });
router.post("/workouts", async (req, res) => {
    try {
        const allExercises = await db.Workout.create({exercises:[]});
        res.status(201).json(allExercises);
    } catch (err) {
        res.status('403')
        res.send(`Failed with: ${err}`)
    };
});

router.put("/workouts/:id", async (req, res) => {
    try {
        const updateExercises = await db.Workout.findOneAndUpdate(
            {_id: req.params.id},
            {
                $push: {
                    exercises: req.body
                }
            }
            );
            res.json(updateExercises);
        } catch (err) {
        res.status('403')
        res.send(`Failed with: ${err}`)
    }
});

module.exports = router;
