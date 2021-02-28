const express = require("express")
const betRouter = express.Router()
const Bet = require("../models/bet.js")

//get all bets
betRouter.get("/", (req, res, next) => {
    Bet.find((err, bets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bets)
    })
})

//post wager
betRouter.post("/", (req, res, next) => {
    const newWager = new Bet(req.body)
    newWager.save((err, savedWager) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedWager)
    })
})

//delete wager
betRouter.delete("/:wagerId", (req, res, next) => {
    Bet.findOneAndDelete({ _id: params.body.wagerId}, (err, deletedWager) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedWager.bet} from your bet`)
    })
})
// update wager
betRouter.update("/:wagerId", (req, res, next) => {
    Bet.findOneAndUpdate({ _id: req.params.wagerId}, req.body, {new: true}, (err, updatedWager) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedWager)
    })
})
module.exports = betRouter