# REPL

Basically an interpreter, like in python.


## Interesting Highlights

You can use ``_`` (underscore) to get the last result:

```
> var a=50
undefined

> var b=50
undefined

> a+b
100

> var sum = _
undefined

> console.log(sum)
100
```

The REPL has command history using the arrow keys.

You can save/load the current session using:

```
.save [filename].js
.load [filename].js
```

A list of all commands can be found by:

```
.help
```
