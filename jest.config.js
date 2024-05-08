const path = require('path');

module.exports = {
  moduleNameMapper: {
    "\\.css$": path.join(__dirname, "/test/jest/__mocks__/styleMock.js")
  }
}