Whack allows easily serializing and deserializing classes.

> Note that parameterized types may not work as intended in the serialization patterns, except for `Array.<T>`, `Vector.<T>` and `Map.<K, V>`.

> Note that using nullable or non-nullable types may not work as intended in the serialization patterns.

> Note that variables should not hold functions in the serialization patterns.

## JSON

JSON data can be serialized with `JSON.stringify(val)`, and for deserializing into a specific class you may use `JSON.parseAs(str, T)`.

The `[Serialization]` meta-data may be required in your classes to guide the (de)serializer.

## Additional data formats

For implementing custom data formats, consult static methods of the `Reflect` namespace and use the methods `isArray()`, `isVector()` and `isMap()` for detection of certain types instead of using `is Array.<*>` for instance.

If the data format is JSON-compatible (like TOML), you may consider instead just using `JSON.stringify()`, `JSON.parse()` and `JSON.parseAs()` in conjunction with a basic (de)serializer of plain objects.

## Tagged types

Use the `[Serialization]` tag as followss to guide the (de)serializer:

- The `tag=""` option indicates the property name used for the type (such as `"type"` as in the object `{ "type": "bear", "anger": 100 }`).
- The `rename=""` option is optional and indicates the serialized form of the type kind (such as `"bear"`). If it is ommited, it defaults to the local name of the class (such as `"Bear"`).

```as3
package demo
{
    [Serialization(tag="type")]
    public class Animal
    {
    }

    [Serialization(tag="type")]
    public class Mammal extends Animal
    {
    }

    [Serialization(rename="bear")]
    public class Bear extends Mammal
    {
        public var anger:Number;
    }
}
```

## Ignoring fields

Ignore fields through the following `Serialization` meta-data:

```as3
[Serialization(skip="true")]
public var x:T;
```

## Renaming fields

Rename variables through the following `Serialization` meta-data indicating their serialized name:

```as3
[Serialization(rename="aa-bb")]
public var aaBB:String;
```

## Unions

Union-like classes are extended for representing different data types. Here is an example:

```as3
package demo
{
    // "1.0.0"
    // { "version": "1.0.0" }
    [Serialization(union="true")]
    public class Dependency
    {
    }

    [Serialization(string="true", field="value")]
    public class VersionDependency extends Dependency
    {
        public var value:String;
    }

    [Serialization(object="true")]
    public class AdvancedDependency extends Dependency
    {
        public var version:String;
    }
}
```

Supported union variants include `string="true"`, `number="true"`, `object="true"`, `array="true"` and `boolean="true"`, where all but `object="true"` require the `field="propertyName"` option. The `array="true"` option works with `Array` and `Vector` field types.

## Classes as formatted strings

Here is an example on formatting classes into a string:

```as3
package
{
    // "1:10-10:1"
    [Serialization(format="{firstLine}:{firstColumn}-{lastLine}:{lastColumn}")]
    public class Location
    {
        public var firstLine:int;
        public var firstColumn:int;
        public var lastLine:int;
        public var lastColumn:int;

        // code
    }
}
```

> Note that the `format` option may also refer to virtual accessors, and not only fixed variables, in which case, for deserialization it is required that the properties are writable.

> Note that the `format` option may not work as intended for decimal or negative numbers depending on the expected punctuation.