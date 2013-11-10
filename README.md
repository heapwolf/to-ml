# SYNOPSIS
Generate markup

# DESCRIPTION
Generating markup can get ugly, the mix of html and javascript can
get very confusing very quickly. This little library helps you create 
readable code. It also has no dependencies on the DOM so you can use 
it on your node.js server.

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
textarea('hey!', { 'data-id': 'greeting' })
```

```html
<textarea data-id="greeting">hey!</textarea>
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

