const jwt = require('jsonwebtoken');

module.exports = {
  validate(headers, role = []){
    let result = {
      code: 200,
      errors: null
    };

    // if token is not empty
    if (headers.authorization) {
      // verify token
      let token = headers.authorization.split(' ');
      if(token.length == 2){
        token = token[1];
        jwt.verify(token, "sfwSdBGatpK0gplzLTuB", function (err, decoded) {
          // token not valid / expired
          if (err) {
            result = {
              code: 401,
              errors: { "message": "Token is invalid" }
            }
          } 
          // role is not permitted
          else if(role.length > 0 && !role.includes(decoded.role)){
            result = {
              code: 403,
              errors: { "message": "You don't have access permission" }
            }
          }
        });
      }
      // wrong token header format
      else {
        result = {
          code: 401,
          errors: { "message": "Token format is wrong" }
        }
      }
    } 
    // token header is empty
    else {
      result = {
        code: 401,
        errors: { "message": "Token must be provided in the request" }
      }
    }

    return result;
  }
}