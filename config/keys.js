// module.exports = {
//   mongoURI:
//     "mongodb+srv://dev:j83MD1cDTeQtBtBs@cluster0-mnmem.mongodb.net/test?retryWrites=true&w=majority",
//   secretOrKey: "secretKey",
// };
// keys.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}