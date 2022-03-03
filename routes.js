// Routes
module.exports = (app) => {
  // Index
  /*app.use(require('./routes/index/index'));
  app.use(require('./routes/index/404'));*/


  app.use(require('./routes/landing/homepage'));
  app.use(require('./routes/team_handler/sort'));


}
