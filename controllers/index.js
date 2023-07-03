// base file for routes

const router = require('express').Router();

const apiRoutes = require('./api');

// add route functions for files needed

// use the routes for the functions created
router.use('/api', apiRoutes);

// redirect errors
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
