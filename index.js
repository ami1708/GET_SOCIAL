const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 2000;

// setting up our layouts
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

//used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo")(session);
const sassMiddleware = require("node-sass-middleware");
//const { urlencoded } = require('express');
const flash = require("connect-flash");
const customMiddleware = require("./config/middleware");

app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    //do i want to display some errors the file which cant be compiled
    debug: true,
    outputStyle: "extended",
    //where should my server look for css file
    prefix: "./css",
  })
);

//setting up the middleware
app.use(express.urlencoded());

app.use(cookieParser());

// using the static files
app.use(express.static("./assets"));
// using the layout
app.use(expressLayouts);
// extract styles and scripts from sub pages to your layouts
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
// use express router

//mongo store is used to store the session cookie in the db
// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
//add a middleware which takes the session cookie and encrypts it
app.use(
  session({
    name: "codial",
    //encrypted
    //to do change the secret before deployment to production mode that is  sending to server
    secret: "something",
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: new MongoStore({
      mongooseConnection: db,
      autoRemove: "disabled",
    }),
    function(err) {
      console.log(err || "connect-mongo setup ok");
    },
  })
);

app.use(passport.initialize());

app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash()); //flash messages are set up to cookies which stores the session information
app.use(customMiddleware.setFlash);
app.use(passport.isUserAuth);
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
