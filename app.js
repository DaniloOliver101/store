const app = require('./config/server');


const Home = require('./app/routes/home')(app);

const Clients = require('./app/routes/clients')(app);

const Products = require('./app/routes/products')(app);

const Orders = require('./app/routes/orders')(app);
