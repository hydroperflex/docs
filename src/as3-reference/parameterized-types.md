Parameterized types exist in two ways:

- Built-ins: `Vector.<T>`, `Array.<T>` and `Map.<K, V>`
- Erasure: any other parameterized type

The erasure way means that the type parameters are erased at runtime, and wherever they appear they are replaced by the `*` type; therefore, defining your own parameterized types is not recommended as it may lead to source of confusion, since using type parameters in built-ins will lead to using `*` as argument, as the following program does:

```as3
package
{
    public class C1.<T>
    {
        public var x:[T];
    }
}
```

Even though at compile time the type `T` is replaced by the respective argument, at runtime the above is equivalent to:

```as3
package
{
    public class C1
    {
        public var x:[*];
    }
}
```

Therefore, the basic recommended parameterized types are `Array.<T>` (or `[T]`), `Vector.<T>`, `Map.<K, V>`, and `Promise.<T>`.