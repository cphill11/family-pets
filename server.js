const express = require('express');
const session = require('express-session');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const { SequelizeScopeError } = require('sequelize');

const app = express();

const PORT = process.env.PORT || 3001;

// set up storage for login information
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
    secret: 'Shh, this is a secret!',
    cookie: {},
    resave: false,
    saveUnintialized: true,
    store: new SequelizeStore( {
        db: SequelizeScopeError
    })
}

app.use(session(sess))

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(_dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turns on routes
app.use(routes);

// turns on connection to db & server
// change false --> true, save --> then flip back, save --> to reset tables
sequelize.sync({ force: false }).then(()=> {
    app.listen(PORT, () => console.log('Now Listening'));
})
