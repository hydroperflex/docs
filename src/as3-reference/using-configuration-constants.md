# Inline constant

An inline constant is the evaluation of a configuration constant, written
in the form `NAMESPACE::name`.

```
trace(CONFIG::debugging);
```

# Conditional block

```
CONFIG::debugging {
    trace("debugging");
}
```

# Conditional definition

```
CONFIG::debugging var x;
```

# Reserved constants

## RT::client

`RT::client` indicates that the target environment is a HTML5 engine; that is, client-side.

## RT::server

`RT::server` indicates that the target environment is a Node.js® engine; that is, server-side.