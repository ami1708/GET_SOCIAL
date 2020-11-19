const development = {
  name: "development",
  asset_path: process.CODIAL_ASSET_PATH,
  session_cookie_key: "JaOIfDuIYCtaHV04KQSg0D2F8DXCkx4w",
  db: "codial_production",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "amisha17200@gmail.com",
      pass: "amiabhi1708",
    },
  },
  google_client_id:
    "741438108020-vm71e2n8nmi68nclqen0rtuq9ssvs9bq.apps.googleusercontent.com",
  google_client_secret: "9K6fjTc2XhxdY5JuRWW_dkru",
  google_call_back_url: "http://codial.com/users/auth/google/callback",
  jwt_secret : 'process.env.CODIAL_JWT_SECRET'
};
  


const production = {
  name : 'production',
  asset_path: process.CODIAL_ASSET_PATH,
  session_cookie_key: "JaOIfDuIYCtaHV04KQSg0D2F8DXCkx4w",
  db: "codial_production",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "amisha17200@gmail.com",
      pass: "amiabhi1708",
    },
  },
  google_client_id:
    "741438108020-vm71e2n8nmi68nclqen0rtuq9ssvs9bq.apps.googleusercontent.com",
  google_client_secret: "9K6fjTc2XhxdY5JuRWW_dkru",
  google_call_back_url: "http://codial.com/users/auth/google/callback",
  jwt_secret : 'process.env.CODIAL_JWT_SECRET'
}


module.exports =
  eval(process.env.CODIAL_DEVELOPMENT) == undefined
    ? development
    : eval(process.env.CODIAL_DEVELOPMENT);
// module.exports = 
//to get in different passwords and static file to use it from here
