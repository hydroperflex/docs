# JavaScript bridge

ActionScript is converted into JavaScript code during compilation step in a hybrid manner. The target audience for this section are third party library developers.

Many of the functions mentioned in this section are not necessary as ActionScript can access JavaScript objects using its native operators, except for lexical references.

The following example accesses the global `Math` object:

```
trace(js_bridge.lexical("Math").random());
```

## JavaScript environment

The JavaScript host environment is expected to be either a W3C compatible environment or a Node.js® compatible environment.

The JavaScript environment is cluttered with several classes, constants, and methods from the [ActionCore](https://github.com/whackengine/actioncore) library as well as linked libraries. They are lexically available as that allows for name mangling in release builds of a Whack application.

There are two special ActionScript configuration constants `RT::client` and `RT::server`, which are each set to either false or true, which indicate the web browser and Node.js® platforms respectively.

```
// RT::client
trace("browser:", RT::client ? "in browser" : "not in browser");

// RT::server
trace("node", RT::server ? "in node" : "not in node");
```

## Importing a JavaScript file

The Whack manifest may specify multiple `[[javascript]]` sections linking a JavaScript file to be imported before the ActionScript environment.

```toml
[[javascript]]
path = "pixi.min.js"
import-declaration = 'import * as PIXI from "pixi.js";'
# client-side = true
# server-side = true
```