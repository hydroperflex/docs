The Whack manifest is a TOML file with the name `whack.toml`, placed in the top directory of a project, that describes an optional Whack workspace and a Whack package.

# Example manifests

## Client side project

The Whack manifest for a client side application looks like the following:

```toml
[package]
name = "com.example.hello-world"
version = "0.1.0"
source-path = ["src"]

[client-side]
main-class = "com.example.Example"

[dependencies]
```

## Server side project

The Whack manifest for a server side application looks like the following:

```toml
[package]
name = "com.example.hello-world"
version = "0.1.0"
source-path = ["src"]

[server-side]
command-name = "example"

[dependencies]
```

## Library project

The Whack manifest for a library project looks like the following:

```toml
[package]
name = "com.example.util"
version = "0.1.0"
authors = ["Me <me@example.com>"]
license = "MIT or Apache-2.0"
description = "My utilities"
source-path = ["src"]

[dependencies]
```

## Workspace

The Whack manifest for a workspace that consists of multiple packages looks like the following:

```toml
[workspace]
members = [
    "packages/com.example.foo",
    "packages/com.example.bar",
]
```

Note that a manifest describing a workspace can also describe a package, as in in the following manifest:

```toml
[workspace]
members = [
    "packages/com.example.foo",
    "packages/com.example.bar",
]

[package]
name = "com.example.hello-world"
version = "0.1.0"
source-path = ["src"]

[client-side]
main-class = "Example"
```

# Defining configuration constants

Define configuration constants for a package through the `[define]` section:

```toml
[define]
"CONFIG::debugging" = true
```

# Specifying the package name

The `package.name` field must be a string matching the Perl regular expression `[A-Za-z][A-Za-z0-9.\-_]*`.

```toml
[package]
name = "com.helper.util"
```

# Specifying version

The `package.version` field is assigned a full SemVer version number consisting of major, minor and patch versions.

```toml
[package]
version = "0.1.0"
```

# Specifying sources

Specify sources to be compiled through the `package.source-paths` field:

```toml
[package]
source-path = ["src"]
```

Note that each `source-path` entry includes either a file or a full directory recursively. ActionScript package definitions may contain zero or more definitions.

# Specifying dependencies

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

# Linking a build script

The Whack manifest may link a script through `package.build-script` that runs before the sources of a Whack package are compiled. This option includes sources similiarly to `package.source-path`, but for the build script.

```toml
[package]
build-script = ["build.as"]
```

The build script is evaluated in the server-side runtime (`RT::server`).

## Specifying build dependencies

Dependencies for the build script are specified in the `[build-dependencies]` section.

# Specifying licenses

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

# Specifying authors

Specify authors of a package through the `package.authors` field, using the format `Full Name <email@example.com>`:

```toml
[package]
authors = ["Example <email@example.com>"]
```

# Specifying keywords

```toml
[package]
keywords = ["container", "utility"]
```

# Specifying categories

```toml
[package]
categories = ["sound", "graphics"]
```

# Specifying description

```toml
[package]
description = "Some description."
```

# Including and excluding files

Indicate which files or directories shall not be uploaded when publishing using a `.whackignore` file in any directories, which consists of [.gitignore-like](https://git-scm.com/docs/gitignore) entries.

Note that the `whack.toml` file is always published and the `target` directory is always excluded.

# Client-side section

The `[client-side]` table indicates that the project is designed for the client-side runtime. The `main-class` option indicates the main class instantiated on startup, which must be a `whack.components.Application` subclass (if it is a MXML component, the root tag is `<w:Application>` or a subtype).

```toml
[client-side]
main-class = "com.example.Main"
```

# Server-side section

The `[server-side]` table indicates that the project is designed for the server-side runtime. The `command-name` option indicates the name for the command line tool compiled for the project.

```toml
[server-side]
command-name = "example-clt"
```

# Metadata

The `package.metadata` field consists of ignored content used by external tools.

```toml
[package.metadata.foo]
bar = "qux"
```

# Linking JavaScript

The Whack manifest may specify multiple `[[javascript]]` sections linking a JavaScript file to be loaded right before the ActionScript environment. The `import-declaration` field must provide highly specific aliases to prevent name conflict.

> Note that the JavaScript filename and import aliases must be very specific to prevent a name conflict.

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