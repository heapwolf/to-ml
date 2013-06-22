
var toML = module.exports = function toML() {

  if (!(this instanceof toML)) {
    return new toML()
  }
}

var formatRegExp = /%[sd%]/g
var format = function(f) {

  var i = 1
  var args = arguments
  var len = args.length
  var isStr = typeof f === 'string'
  var str = ''

  if (isStr) { 
    str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%'
      if (i >= len) return x
      switch (x) {
        case '%s': return String(args[i++])
        case '%d': return Number(args[i++])
        default:
          return x
      }
    })
  }
  for (var x = args[i]; i < len; x = args[++i]) {
    if (x === null || typeof x !== 'object') {
      str += x
    }
  }
  return str
}

var tags = [
  'a abbr acronym address area article aside audio',
  'b bdi bdo big blockquote body br button',
  'canvas caption cite code col colgroup command',
  'datalist dd del details dfn div dl dt em',
  'embed fieldset figcaption figure footer form frame',
  'frameset h1 h2 h3 h4 h5 h6 head header',
  'hgroup hr html i iframe img input ins kbd',
  'keygen label legend li link map mark meta',
  'meter nav noscript object ol optgroup option',
  'output p param pre progress q rp rt ruby',
  'samp script section select small source span',
  'split strong style sub summary sup table tbody',
  'td textarea tfoot th thead time title tr',
  'track tt ul var video wbr'
].join(' ').split(' ')

var voids = [
  'area br col embed frame hr img input link meta',
  'param source wbr'
].join(' ').split(' ')

function generate(name, args) {

  var attrs = ''

  for(var a in args) {
    if (Array.isArray(args[a])) {
      args[a] = args[a].join(' ')
    }
    else if (typeof args[a] === 'function') {
      args[a] = '<' + args[a].identifier + '>'
    }
    else if (typeof args[a] === 'object') {
      attrs = []
      for(var k in args[a]) {
        attrs.push(k + '="' + args[a][k] + '"')
      }
      attrs = ' ' + attrs.join(' ')
    }
    else {
      args[a] = String(args[a])
    }
  }

  var val = format.apply(null, args)

  if (voids.indexOf(name) > -1) {
    return '<' + name + attrs + '>'
  }
  else {
    return '<' + name + attrs + '>' + val + '</' + name + '>'
  }
}

tags.concat(voids).forEach(function(name) {

  toML.prototype[name] = function() {
    return generate.call(null, name, arguments)
  }

  toML.prototype[name].identifier = name
})
