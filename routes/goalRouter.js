const express = require('express')
const goalRouter = express.Router()
const Goal = require('../models/Goal.js')


goalRouter.get("/", (req, res, next) => {
    Goal.find((err, goals) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(goals)
    })
  })


  // Get All Issues



  goalRouter.get('/user/:userId', (req, res, next) => {
    Goal.find( { user: req.user._id }, 
        (err, goals) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(goals)
    })
  })
  

goalRouter.get("/:goalId", (req, res, next) => {
    Goal.findById(req.params.goalId, 
        (err, goal) => {
        if (err) {
          res.status(500)
          return next(err)
        } else if (!goal) {
          res.status(404)
          return next(new Error('No item has been found.'))
        }
        return res.send(goal)
      })
})



goalRouter.post("/", (req, res, next) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newGoal = new Goal(req.body)
    newGoal.save((err, savedGoal) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGoal)
    })
})

goalRouter.delete("/:goalId", (req, res, next) => {
    Goal.findOneAndDelete(
        { _id: req.params.goalId },
        (err, deletedGoal) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedGoal}`)
        }
    )
})


goalRouter.put("/isCompleted/:goalId", (req, res, next) => {
  Goal.findOneAndUpdate(
    {_id: req.params.goalId,
    user: req.user._id },
    { $set: { isCompleted: true } },
    function (err, goal) {
    goal.isCompleted = !goal.isCompleted;
    goal.save( function (err, updatedGoal) {
      if(err) {
        res.status(500)
        return next(err)
      } 
      return res.status(201).send(updatedGoal)
    })
  })
})


module.exports = goalRouter
