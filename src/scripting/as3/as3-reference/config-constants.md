# Configuration constants

## Inline constant

An inline constant is the evaluation
of a configuration constant, written
in the form `NAMESPACE::NAME`.

```
trace(CONFIG::DEBUG);
```

## Conditional block

```
CONFIG::DEBUG {
    trace("debugging");
}
```

## Conditional definition

```
CONFIG::DEBUG var x;
```
