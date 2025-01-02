ActionScript is converted into JavaScript code during compilation step in a hybrid manner. The target audience for this section are third party library developers.

Many of the functions mentioned in this section are not necessary as ActionScript can access JavaScript objects using its native operators, except for lexical references.

The following example accesses the global `Math` object:

```
trace(JSBridge.lexical("Math").random());
```

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