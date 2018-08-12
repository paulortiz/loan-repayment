
const errorCodes = require("../../configs/error-codes.json")

class ResponseBuilder {
  static error(code) {
    let error = errorCodes[code]
    return {
      error: error
    }
  }
  static success(body) {
    return {
      body,
      error: null
    }
  }
}

module.exports = ResponseBuilder
