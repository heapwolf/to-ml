# SYNOPSIS
Generate markup

# USAGE
```js
var template = require('to-ml')().template
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

### IDs and Classes
If a string value matches the pattern used to create `IDs` and `classes`, they
will be automatically generated. 

```js
a('#home.primary.link', 'home', { href: '/' })
```

```html
<a id="home" class="primary link" href="/">home</a>
```

The pattarn to determine if a string value passed to a tag function is special 
looks like this...

```
'[#id][.class1[.class2[...]]]'
```

### Adding attributes
Just add an object to the arguments, doesnt mater what order it's provided in.
```js
textarea('hey!', { value: 'greeting' })
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

