const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Analyst = require("../models/AnalystModel");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Analyst.findById(jwt_payload.id)
        .then(analyst => {
          if (analyst) {
            return done(null, analyst);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};