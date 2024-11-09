# Manifest file

The Whack manifest is a TOML file with the name `whack.toml`, placed in the top directory of a project, that describes an optional Whack workspace and a Whack package.

## Examples

### Client application

The Whack manifest for a client side application looks like the following:

```toml
[package]
name = "example"
version = "0.1.0"

[[source]]
path = "src"
include = true

[client-side]
enable = true
main-class = "example.Example"

[dependencies]
```

### Library

The Whack manifest for a library looks like the following:

```toml
[package]
name = "example.util"
version = "0.1.0"
author = "Me <me@example.com>"
license = "MIT or Apache-2.0"
description = "My utilities"

[[source]]
path = "src"
include = true

[dependencies]
```

### Server application

The Whack manifest for a server side application looks like the following:

```toml
[package]
name = "example"
version = "0.1.0"

[[source]]
path = "src"
include = true

[server-side]
enable = true
executable-name = "example"

[dependencies]
```

### Workspace

The Whack manifest for a workspace that consists of multiple packages looks like the following:

```toml
[workspace]
members = [
    "packages/master",
    "packages/chief",
]
```

## Build script

The Whack manifest may link a script that runs before the sources of a Whack package are compiled.

```toml
[[build-source]]
path = "build.as"
include = true
```

## JavaScript

The Whack manifest may specify multiple `[[javascript]]` sections linking a JavaScript file to be loaded right before the ActionScript environment. The `import-declaration` field must provide highly specific aliases to prevent name conflict.

> Note that the JavaScript filename must be very specific to prevent a name conflict.

```toml
[[javascript]]
path = "lib.min.js"
import-declaration = 'import * as lib from "./lib.min.js";'
```

The `[[javascript]]` section may be designed exclusive to either the client side or server side:

```toml
[[javascript]]
path = "lib.min.js"
import-declaration = 'import * as lib from "./lib.min.js";'
# client-side = true
# server-side = true
```