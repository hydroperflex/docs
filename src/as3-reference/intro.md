ActionScript 3 is the primary general purpose, object-oriented scripting language supported by the Whack engine, which is based in the ECMAScript fourth edition. Whack supports certain features not contained in the specification.

# Specification

[ActionScript 3 Language Specification](https://web.archive.org/web/20240424210812/https://static.bloople.net/ActionScript%203%20Language%20Specification.pdf)

[ECMA-262 Third Edition](https://ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf)

[ECMA-357 Second Edition](https://www.ecma-international.org/wp-content/uploads/ECMA-357_2nd_edition_december_2005.pdf)

# Basic programs

The following program prints "Hello world" to the console:

```
trace("Hello world");
```

The following program defines a range clamping function:

```
function clamp(val:Number, start:Number, end:Number):Number
{
    return Math.min(Math.max(val, start), end);
}
```

The following program defines a global variable:

```
package
{
    public const DELTA:Number = 2 - 7;
}
```

The following program defines a function at the package `com.company.max`:

```
package com.company.max
{
    public function contract(team:Team):void
    {
        trace("a phone call to", team.name);
    }
}
```

The following program defines the representation of a team in a company as an ActionScript class:

```
package com.company.max
{
    public class Team
    {
        private var m_name:String;

        public function Team(name:String)
        {
            m_name = name;
        }
        public function get name():String
        {
            return m_name;
        }
    }
}
```

The following program demonstrates how you basically define and use enumeration types:

```
package com.company.max
{
    public enum Priority
    {
        const LOW;
        const HIGH;
    }
}

import com.company.max.Priority;

var p:Priority?;

// using string literal
p = "low";
p = "high";

// using the property operator
p = Priority.LOW;
p = Priority.HIGH;

eqv();

function eqv():void
{
    // equivalent numbers
    trace("number of Priority.LOW:", Priority.LOW.valueOf());
    trace("number of Priority.HIGH:", Priority.HIGH.valueOf());

    // equivalent strings
    trace("string of Priority.LOW:", Priority.LOW.toString());
    trace("string of Priority.HIGH:", Priority.HIGH.toString());
}
```

Log:

```plain
number of Priority.LOW: 0
number of Priority.HIGH: 1
string of Priority.LOW: low
string of Priority.HIGH: high
```

The following program demonstrates using `RecordLike` classes to initialise a class using an object initialiser:

```
package
{
    [RecordLike]
    public class AcquisitionOptions
    {
        public var color:String;

        public var size:ClothSize;
    }
}

var o1:AcquisitionOptions = {
    color: "green"
};

var o2:Object = AcquisitionOptions({
    size: "P",
});
```
