require('dotenv').config();
require('express-async-errors');

const path = require('path');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const session = require('express-session');
const MongoStore = require("connect-mongo")

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs');

const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

const connectDB = require('./db/connect');
const authenticateUser = require('./middlewares/authentication');

const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const scrapRouter = require('./routes/scrapper');

const storePrevUrl = require('./middlewares/store-prev-url');
const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error-handler');

app.use(express.static('./public'));
app.use(express.static(path.join(__dirname + 'public')));
app.use(cookieParser());
// app.use(csurf());

app.use(
    session({
        secret: process.env.JWT_SECRET,
        cookie: {},
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl: process.env.MONGO_URI})
    })
)

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(express.json());
app.use(helmet());
app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "img-src": ["'self'", "https: data:"],
        'script-src': ["'self'", "https://unpkg.com/axios@1.1.2/dist/axios.min.js"] 
      }
    })
  )

app.use(xss());
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(storePrevUrl);


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/search', scrapRouter);
app.use('/api/v1/products', authenticateUser, productsRouter);
 
// app.use(notFoundMiddleware);
app.use(errorMiddleware);









app.get('/', (req,res) => {
    res.render('index.ejs', {isLoggedIn: (req.session.user !== undefined)}); 
})

const port = process.env.PORT || 3000;
 
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`app listening to port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();