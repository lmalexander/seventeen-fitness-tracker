const router = require("express").Router();
const workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put ("/api/workouts/:id", ({body, params}, res) => {
    workout.findByIdAndUpdate(
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});