The `[RecordLike]` meta-data indicates that a class may be instantiated through the object initialiser (`{ ... }`) expression.

```as3
package com.demo
{
    [RecordLike]
    public class Options
    {
        public var speed:Number;
    }
}
```

There are three ways to instantiate the above class:

```as3
// way 1
const options:Options = { speed: 10 };

// way 2
const options:* = Options({ speed: 10 });

// way 3
const options = new Options();
options.speed = 10;
```