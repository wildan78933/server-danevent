const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  // urlDb: process.env.URL_MONGODB_DEV,
  urlDb: process.env.URL_MONGODB_PRO,
  jwtExpiration: process.env.JWT_EXPIRATION,
  jwtSecret: process.env.JWT_SECRET_KEY,
  // jwtRefreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION,
  jwtRefreshTokenExpiration: process.env.JWT_EXPIRATION_REFRESH_TOKEN,
  jwtRefreshTokenSecret: process.env.JWT_SECRET_KEY_REFRESH_TOKEN,
  // jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
