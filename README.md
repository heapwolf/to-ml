# SYNOPSIS
Easily generate markup from javascript

# USAGE
```js
var to = require('to-ml')()
to.span('hello, world!')
```

### Nesting tags
Nested tags are just strings, so put them in any order you want.

```js
to.span('hey!',
  to.span('this is', 
    to.b('easy')
  )
)
```

```html
<span>hey!<span>this is<b>easy</b></span></span>
```

### Adding attributes
Just add an object to the arguments, doesnt mater what order it's provided in.
```js
to.div('hey!', { id: 'greeting' }
)
```

```html
<div id="greeting">hey!</div>
```
### When there are no params
```js
  to.header(
    to.br,
    to.h1('Hello, World!')
    to.hr,
    to.br
  ),
```

```html
<header><br><h1>Hello, World!</h1><hr><br></header>
```
