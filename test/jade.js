
var assert = require('assert')

var templation = require('..')

describe('engines.jade', function () {
  var view = templation({
    root: 'test/fixtures'
  })
  view.use('jade', templation.engines.jade)

  it('should render with an extension', function () {
    view.render('index.jade', {user: {name: 'hi'}})
    .then(function (html) {
      assert.equal(html.trim(), '<p>hi</p>')
    })
  })

  it('should render without an extension', function () {
    view.render('index', {user: {name: 'hi'}})
    .then(function (html) {
      assert.equal(html.trim(), '<p>hi</p>')
    })
  })

  it('should throw if error and you can `.catch` it', function () {
    view.render('index.jade', {hello: 'hi'})
    .then().catch(function(err) {
      assert(err instanceof Error)
    })
  })
})
