// Routes
module.exports = (app) => {
    app.use(require('./routes/landing/homepage.ts'));
    app.use(require('./routes/team_handler/sort'));
};
