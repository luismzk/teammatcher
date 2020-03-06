var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  process.env.PORT = 5000;
  var config = require('./config.json');
  var envConfig = config[env];
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
