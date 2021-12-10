
const express = require("express"),
    app = express(),
    db_name = 'notes',
    bp = require('body-parser'),
    path = require("path"),
    port = 8000;

app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require("./server/config/mongoose")(db_name);
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`listening on port ${port}`);
})