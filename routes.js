// Routes
module.exports = (app, passport) => {
  // Index
  /*app.use(require('./routes/index/index'));
  app.use(require('./routes/index/404'));*/


  app.use(require('./routes/landing/homepage'));


}
