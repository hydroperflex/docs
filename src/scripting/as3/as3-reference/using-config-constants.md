# Using configuration constants

## Inline constant

An inline constant is the evaluation of a configuration constant, written
in the form `NAMESPACE::name`.

```
trace(CONFIG::debugging);
```

## Conditional block

```
CONFIG::debugging {
    trace("debugging");
}
```

## Conditional definition

```
CONFIG::debugging var x;
```