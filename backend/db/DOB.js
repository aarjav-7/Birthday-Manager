const mongoose = require("mongoose");

const dobSchema = new mongoose.Schema({
    name:String,
    day:String,
    month:String,
    year:String,
    mobile: Number,
    mail: String,
    insta: String,
    tags:Array
});

module.exports = mongoose.model("data_dobs", dobSchema);