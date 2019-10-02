
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app example running on 3000')
})