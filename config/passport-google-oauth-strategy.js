const passport = require('passport')

const googleStrategy = require('passport-google-oauth').OAuth2Strategy
const crypto = require('crypto')
const user = require('../models/user')
//we need to tell passport to use object of google stategy