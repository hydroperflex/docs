ActionScript is converted into JavaScript code during compilation step in a hybrid manner. The target audience for this section are third party library developers that reuse JavaScript libraries.

ActionScript can access JavaScript objects using its native operators, except for lexical references, however certain methods of the `JSBridge` static class might be necessary.

The following example accesses the global `Math` object:

```
trace(JSBridge.lexical("Math").random());
```

# JavaScript values

There are certain points to be aware of:

- Variables that hold a JavaScript value are of the `*` (wildcard) type.
- The methods `JSBridge.newArray()` and `JSBridge.toJavascriptArray()` construct a JavaScript `Array` object.
- The methods `JSBridge.newPlainObject()` and `JSBridge.toJavascriptPlainObject()` construct a JavaScript plain object (`Object`).
- There are miscellaneous conversion methods defined by the `JSBridge` static class, such as `toJavascriptFunction()`.

# Supported runtimes

The JavaScript host environment is expected to be either a HTML5 engine or a Node.js® engine.

The JavaScript environment is cluttered with several classes, constants, and methods from the [ActionCore](https://github.com/whackengine/actioncore) library as well as linked libraries. They are lexically available as that allows for name mangling in release builds of a Whack application.

There are two special ActionScript configuration constants `RT::client` and `RT::server`, which are each set to either false or true, which indicate HTML5 and Node.js® platforms respectively.

```
// RT::client
trace("HTML5:", RT::client ? "in HTML5" : "not in HTML5");

// RT::server
trace("node:", RT::server ? "in node" : "not in node");
```

# Linking a JavaScript file

The Whack manifest may specify multiple `[[javascript]]` sections linking a JavaScript file to be imported before the ActionScript environment.

```toml
[[javascript]]
path = "pixi.min.js"
import-declaration = 'import * as PIXI from "pixi.js";'
# client-side = true
# server-side = true
```