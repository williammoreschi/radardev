const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
let user = "<user>";
let pass = "<pass>";
mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0-ppxph.mongodb.net/week10?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);