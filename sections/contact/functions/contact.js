/**
 *
 * @param event
 * @param _context
 * @param callback
 */
exports.handler = (event, _context, callback) => {
  console.log({event})
  /**
   * callback definition
   * @Arg1 error set to null, when nothing goes wrong
   * @Arg2 success object
   */
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({foo: true}),
  })
}
