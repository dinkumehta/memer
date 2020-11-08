const express = require('express')
const app = express()
const mongoose = require("mongoose");
const os = require('os');
url = process.env.DATABASEURL || "mongodb://localhost/fgu"
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://Dinku:bhambham2@cluster0.xdujx.mongodb.net/omegle?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const omegleSchema = new mongoose.Schema({
  dateandtime: String,
  os: String
});
const omegleModel = mongoose.model('omegle', omegleSchema);
const port = 3000
app.use(express.static("public"));
app.set('views', __dirname + '/views')
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index.ejs')
    var a = Date();
    // console.log(a)
    // console.log(os.platform())
    // console.log(os.hostname())
    // console.log(os.cpus())
    const information = new omegleModel({
        dateandtime: a,
        os: os.platform()
    })
    information.save();
});




app.listen(process.env.PORT, process.env.IP, () => console.log(`Example app listening on port ${port}!`));

