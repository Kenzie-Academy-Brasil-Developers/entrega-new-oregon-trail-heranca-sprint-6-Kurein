const {Traveler}  = require("./models/Traveler");
const {Hunter}  = require("./models/Traveler");
const {Doctor}  = require("./models/Traveler");
const Wagon     = require("./models/Wagon");

let viajante = new Traveler();
let carroca = new Wagon();
let cacador = new Hunter();
let doutor = new Doctor();

let viajanteSergio = new Traveler();
let viajanteSimone = new Traveler();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

module.exports = {
    viajante,
    carroca,
    cacador,
    doutor
}