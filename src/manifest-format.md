# The Whack manifest format

The Whack manifest is a TOML file with the name `whack.toml`, placed in the top directory of a project, that describes an optional Whack workspace and a Whack package.

## Example manifests

### Client side project

The Whack manifest for a client side application looks like the following:

```toml
[package]
name = "example"
version = "0.1.0"
source-path = ["src"]

[client-side]
main-class = "example.Example"

[dependencies]
```

### Server side project

The Whack manifest for a server side application looks like the following:

```toml
[package]
name = "example"
version = "0.1.0"
source-path = ["src"]

[server-side]
executable-name = "example"

[dependencies]
```

### Library project

The Whack manifest for a library project looks like the following:

```toml
[package]
name = "example.util"
version = "0.1.0"
authors = ["Me <me@example.com>"]
license = "MIT or Apache-2.0"
description = "My utilities"
source-path = ["src"]

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

Note that a manifest describing a workspace can also describe a package, as in in the following manifest:

```toml
[workspace]
members = [
    "packages/master",
    "packages/chief",
]

[package]
name = "example"
version = "0.1.0"
source-path = ["src"]

[client-side]
main-class = "Example"
```

## Defining configuration constants

Define configuration constants for a package through the `[define]` section:

```toml
[define]
"CONFIG::debugging" = true
```

## Specifying sources

Specify sources to be compiled through the `package.source-paths` field:

```toml
[package]
source-path = ["src"]
```

Note that each `source-path` entry includes either a file or a full directory recursively. ActionScript package definitions may contain zero or more definitions.

## Specifying dependencies

A dependency may be structured in different ways inside the `[dependencies]` section:

```toml
[dependencies]
# Registry dependency
x = "0.1.0"
# Local dependency
x = { path = "../depname", version = "1" }
# Git dependency
x = { git = "https://github.com/example/x.git" }
# Git dependency (specific branch)
x = { git = "https://github.com/example/x.git", branch = "next" }
# Git dependency (specific revision)
x = { git = "https://github.com/example/x.git", rev = "7ef403910a5a7ef403910a5a" }
```

## Linking a build script

The Whack manifest may link a script through `package.build-script` that runs before the sources of a Whack package are compiled. This option includes sources similiarly to `package.source-path`, but for the build script.

```toml
[package]
build-script = ["build.as"]
```

The build script is evaluated in the server-side runtime (`RT::server`).

### Specifying build dependencies

Dependencies for the build script are specified in the `[build-dependencies]` section.

## Specifying licenses

License types may be described through the `package.license` field, separated by the `" or "` delimiter:

```toml
[package]
license = "MIT or Apache-2.0"
```

Indicate the license file through the `package.license-file` field:

```toml
[package]
license-file = "LICENSE"
```

## Specifying authors

Specify authors of a package through the `package.authors` field, using the format `Full Name <email@example.com>`:

```toml
[package]
authors = ["Example <email@example.com>"]
```

## Including and excluding files

The following mutually-exclusive fields contain [.gitignore-like](https://git-scm.com/docs/gitignore) entries used for indicating which files or directories shall be uploaded when publishing:

```toml
[package]
# Optional: choose this for including specific files or directories
include = ["/foo"]
# or choose this for excluding specific files or directories.
exclude = ["/bar"]
```

Note that the `whack.toml` file is always published, regardless of these options.

## Metadata

The `package.metadata` field consists of ignored content used by external tools.

```toml
[package.metadata.foo]
bar = "qux"
```

## JavaScript

The Whack manifest may specify multiple `[[javascript]]` sections linking a JavaScript file to be loaded right before the ActionScript environment. The `import-declaration` field must provide highly specific aliases to prevent name conflict.

> Note that the JavaScript filename must be very specific to prevent a name conflict.

```toml
[[javascript]]
path = "lib.min.js"
import-declaration = 'import * as lib from "./lib.min.js";'
```

The `[[javascript]]` section may be designed exclusive to the client side (`RT::client`):

```toml
[[javascript]]
path = "lib.min.js"
import-declaration = 'import * as lib from "./lib.min.js";'
client-side = true
```

The `[[javascript]]` section may be designed exclusive to the server side (`RT::server`):

```toml
[[javascript]]
path = "lib.min.js"
import-declaration = 'import * as lib from "./lib.min.js";'
server-side = true
```