# ASDoc configuration

A Whack package may include an ASDoc configuration file (`asdoc.xml`) which links files to be included and sections to be rendered during ASDoc compilation.

## Example

The following is an example `asdoc.xml` XML file that uses the `docs` directory for the ASDoc assets and sections:

```xml
<?xml version="1.0"?>
<asdoc>
    <root-path>docs</root-path>
    <assets>
        <path>**/*.png</path>
        <path>**/*.jpg</path>
    </assets>
    <!-- Home section -->
    <home title="My Package's Home" path="index.md"/>
    <!-- Other sections -->
    <sections>
        <section title="Getting to know Foo" path="foo.md">
            <section title="Getting to know Qux" path="qux.md"/>
        </section>
    </sections>
</asdoc>
```

## Root path

The `<root-path>` option of the configuration file indicates the root path for the `path` option of all sections and the assets, including the `home` section, so that it does not have to be repeated across sections and assets.