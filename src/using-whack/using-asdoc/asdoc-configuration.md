A Whack package may include an ASDoc configuration file (`asdoc.xml`) which links sections and media files to be rendered during ASDoc compilation.

# Example

The following is an example `asdoc.xml` XML file that uses the `docs` directory for the ASDoc assets and sections:

```xml
<?xml version="1.0"?>
<asdoc>
    <root-path>docs</root-path>
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

# Root path

The `<root-path>` option of the configuration file indicates the root path for the `path` option of all sections and the assets, including the `home` section, so that it does not have to be repeated across sections.

The compiler will recursively copy any media files (PNG, SVG, GIF, JPEG, JPG, BMP, MP4) from the directory pointed by the `<root-path>` option.