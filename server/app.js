const express = require('express');
const cors = require('cors');
const data = require('./data');

const PORT = 3035;
const app = express();

app.use(cors())
app.use(express.json());

app.get('/getProd', function (req, res) {
    console.log(req.query.key, '>>>');
    const searchKey = (req.query.key || '').toLowerCase();
    let prods = data;
    
    if (searchKey) {
        prods = data.filter(eachProd => {
            return eachProd.name.toLowerCase().includes(searchKey) || eachProd.about.toLowerCase().includes(searchKey) || eachProd.tags.includes(searchKey)
        })
    }

    console.log(prods, '%%%%')
    res.end(JSON.stringify(prods));
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});