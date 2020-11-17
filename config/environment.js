const development = {
  name: "development",
  asset_path: process.env.port,
  session_cookie_key: "something",
  db: "codial-development",
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
  google_call_back_url: "http://localhost:2000/users/auth/google/callback",
  jwt_secret : 'codial'
};
  


const production = {
    name : 'production'
}


module.exports= development
//to get in different passwords and static file to use it from here
