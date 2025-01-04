The Whack™ package registry is where published packages are hosted.

# Packages as optional namespaces

The dot separator used in package names has a semantic meaning of subpackage, except for the initial sequences:

- `com.{name}`
- `net.{name}`
- `org.{name}`
- `me.{name}`

The following rules apply:

- Packages of the names `com`, `net`, `org` and `me` are not allowed.
- Publishing a subpackage of an existing package requires ownership over the existing package.

For example, say `prisma` is a package; then `prisma.util` is a subpackage of `prisma`.