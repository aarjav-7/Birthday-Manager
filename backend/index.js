const express = require("express");
const cors = require("cors")
require("./db/config");
const DOB = require("./db/DOB");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/add", async (req, resp)=>{
    let dob = new DOB(req.body)
    let result = await dob.save();
    resp.send(result);
})

app.get("/displayall", async (req, resp)=>{
    let dobs = await DOB.find();
    if(dobs.length > 0)
    {
        resp.send(dobs);
    }
    else
    {
        resp.send({result:"No data found..."});
    }    
})

app.delete("/dob/:id", async(req, resp)=>{
    const result = await DOB.deleteOne({_id:req.params.id})
    resp.send(result);
});

app.get("/dob/:id", async(req, resp)=>{
    let result = await DOB.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result);
    }
    else
    {
        resp.send({result:"No result found"});
    }
})


app.put("/dob/:id", async(req, resp)=>{
    let result = await DOB.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result);
})

app.listen(5000);
