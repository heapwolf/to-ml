# SYNOPSIS
Generate markup

# USAGE
```js
var templte = require('to-ml')().templte
```

```js
template(function() {
  return div('hey!',
    span('this is', 
    b('easy')
  )
})
```

```html
<span>hey!<span>this is<b>easy</b></span></span>
```

### Adding attributes
Just add an object to the arguments, doesnt mater what order it's provided in.
```js
div('hey!', { id: 'greeting' })
```

```html
<div id="greeting">hey!</div>
```

### When there are no params
```js
header(
  br,
  h1('Hello, World!')
  hr,
  br
),
```

```html
<header><br><h1>Hello, World!</h1><hr><br></header>
```

