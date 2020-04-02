// dependency
const mongoose = require("mongoose");

// use mongoose schema
const Schema = mongoose.Schema;

// create mongoose database schema
const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Did you complete a resistance or a cardio workout?"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Did you run or lift weights?"
                },
                duration: {
                    type: Number,
                    required: "How long did you work out (in minutes)?"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
    toJSON: {
        virtuals: true
    }
    }   
);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
    
  const Workout = mongoose.model("Workout", workoutSchema);

  module.exports = Workout;