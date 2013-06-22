
var h = require('./index')()
var assert = require('assert')

assert.equal(
  h.div('test'), 
  '<div>test</div>',
  'output should be html'
)

assert.equal(
  h.div('a', h.div('b')), 
  '<div>a<div>b</div></div>',
  'output should be a nested set of tags'
)

assert.equal(
  h.div(h.div('b'), 'a'), 
  '<div><div>b</div>a</div>',
  'content should be generated in the order it is received'
)

assert.equal(
  h.div('a', { class: 'test' }),
  '<div class="test">a</div>',
  'when an object is provided its keys and values should become properties'
)

assert.equal(
  h.div({ class: 'test' }, 'a'),
  '<div class="test">a</div>',
  'allow arbitrary ordering of attributes and body'
)

assert.equal(
  h.div('%s %d', 'test', 1),
  '<div>test 1</div>',
  'allow %s and %d in bodies'
)
