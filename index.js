// File name: index.js
/**Name: Pavankumar Patel
student ID: 301299711 
Course: Software Engineering Technician
College: Centennial College*/

/**
 * Express module
 * @const
 */
import express from "express";

/**
 * Routes module
 * @const
 */
import routes from './routes/routes.js';

/**
 * Path module
 * @const
 */
import path, { dirname } from 'path';

/**
 * The filename of the current module
 * @type {string}
 */
const __filename = import.meta.url;

/**
 * The directory name of the current module
 * @type {string}
 */
const __dirname = path.dirname(__filename);

/**
 * Express application
 * @const
 */
const app = express();

/**
 * The port number to listen on
 * @const
 * @type {number}
 */
const port = 3000;

//set up static files
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ejs setup
app.set('view engine', 'ejs');
app.set('views', './views');

/**
 * Middleware for handling routes
 * @name app.use
 * @function
 * @param {string} path - The path to handle
 * @param {function} middleware - The middleware function to handle the path
 */
app.use('/', routes);

/**
 * GET request for the home page
 * @name routes.get
 * @function
 * @param {string} path - The path to handle
 * @param {function} callback - The callback function to handle the request
 */
routes.get('/', (req, res) => {
    res.render('index',{title: 'Home'});
});

/**
 * GET request for the about page
 * @name routes.get
 * @function
 * @param {string} path - The path to handle
 * @param {function} callback - The callback function to handle the request
 */
routes.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
});

/**
 * GET request for the portfolio page
 * @name routes.get
 * @function
 * @param {string} path - The path to handle
 * @param {function} callback - The callback function to handle the request
 */
routes.get('/portfolio', (req, res) => {
    res.render('portfolio',{title: 'portfolio'});
});

/**
 * GET request for the services page
 * @name routes.get
 * @function
 * @param {string} path - The path to handle
 * @param {function} callback - The callback function to handle the request
 */
routes.get('/services', (req, res) => {
    res.render('services',{title: 'services'});
});

/**
 * GET request for the contact page
 * @name routes.get
 * @function
 * @param {string} path - The path to handle
 * @param {function} callback - The callback function to handle the request
 */
routes.get('/contact', (req, res) => {
    res.render('contact',{title: 'Contact'});
});

/**
 * Start the server listening on the specified port
 * @name app.listen
 * @function
 * @param {number} port - The port number to listen on
 * @param {function} callback - The callback function to execute when the server starts listening
 */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});