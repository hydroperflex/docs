MXML is an eXtensible Markup Language used for expressing user interface components over the ActionScript language.

# MXML file

A MXML file shall have a filename that identifies the name of the ActionScript class that it defines, while the parent directories after a source path determine the ActionScript package it belongs to.

Given that the Whack manifest defines `source[0].path = "src"`, the following is an example MXML file defining the class `com.company.max.WeatherScreen`:

```mxml
<!-- src/com/company/max/WeatherScreen.mxml -->
<?xml version="1.0"?>
<w:HGroup xmlns:w="http://ns.whack.net/2024">
    <w:Label variant="heading" value="Weather"/>
</w:HGroup>
```

# w prefix

The convention is to assign the `w` prefix as the URI `http://ns.whack.net/2024`, identifying the Whack elements and component set.

# &lt;w:Script/&gt;

The `<w:Script/>` element is used for defining properties and methods inside the component using the ActionScript language.

```mxml
<?xml version="1.0"?>
<w:HGroup xmlns:w="http://ns.whack.net/2024">
    <w:Script><![CDATA[
        // definitions
    ]]></w:Script>
</w:HGroup>
```