const mongoose = require('mongoose')
var dbname;
mongoose.connect('mongodb://localhost:27017/fooddonation', { useNewUrlParser: true, useUnifiedTopology: true }, (err, dbnm) => {
    if(!err)
    {
        console.log('MongoDB Database connection successfully executed');
    }
    else{
        console.log('DB connection Failed');
    }
})
module.exports = mongoose