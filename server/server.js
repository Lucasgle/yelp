require("dotenv").config();
//comentario
const express = require("express")
const morgan = require("morgan");

const app = express()

app.use(express.json());

app.get("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
});

app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
});

app.put("/api/v1/restaurants/:id", (req, res) =>{
    console.log(req.params.id);
    console.log(req.body);
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})