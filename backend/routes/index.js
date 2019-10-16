var { Auth } = require('../controllers');


const router = (app) => {
  // auth
  app.route('/auth/signin').post(Auth.signIn);
  app.route('/auth/signup').post(Auth.signUp);
  
  // default route
  app.route('*').get((request, response) => {
    response.status(403);
    response.json({
      status: false,
      message: "Forbidden!"
    })
    response.end();
  })
}

module.exports = router;