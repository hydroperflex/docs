ASDoc comments are used to better document ActionScript entities with detailed descriptions. An ASDoc comment is in the format `/** [...] */` supporting Markdown and ASDoc tags such as `@param`.

```as3
package
{
    /**
     * The global variable `x`.
     */
    public var x;
}
```

# Main body

An ASDoc comment may contain a main body, whose first sentence is taken as a brief summary.

# Supported ASDoc tags

ASDoc tags start with an at-sign (**@**), appearing inside an ASDoc comment.

## @author

Indicates the author(s) of an entity.

```plain
@author Example Author
```

## @copy

Copies the documentation comment of another entity, patching any anchor links. It takes one of the following formats:

```plain
@copy x
@copy Foo#x
@copy #x
```

The hash (`#`) indicates an instance property.

## @default

Indicates the default value of an entity.

```plain
@default 0xFF
```

## @deprecated

Indicates that an entity is deprecated.

```plain
@deprecated
@deprecated Message
```

## @eventType

Indicates a static constan for an `[Event]` meta-data.

```plain
@eventType Event.ENTER_FRAME
```

## @example

Attaches an example.

<pre>
@example
```
trace("Hello, world!");
```
</pre>

## @inheritDoc

Inherits documentation from a base entity (base class or method from base class).

```plain
@inheritDoc
```

## @internal

Attaches internal description that is not rendered into the ASDoc output.

```plain
@internal Internal comment.
```

## @param

Attaches a description to a parameter of a function.

```plain
@param paramName Description
```

## @private

Indicates that an entity is private and should not generate ASDoc output.

```plain
@private
```

## @productversion

Indicates supported product versions.

```plain
@productversion Whack 1.0
```

## @return

Attaches a description to the return of a function.

```plain
@return Description
```

## @see

References an alternative entity.

```plain
@see x
@see x [Display text]
@see Foo#x [Display text]
@see #x [Display text]
```

The hash (`#`) indicates an instance property.

## @throws

Indicates a possibly thrown error of a function, with an optional description.

```plain
@throws Error [Description]
```