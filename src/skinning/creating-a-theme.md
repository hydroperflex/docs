# Creating a theme

A theme defines a cascading style sheet that may be applied to the Whack application. A theme is logical, therefore it is an AS file defining a class that extends `whack.themes.Theme`.

```as3
package
{
    import whack.themes.*;
    public class HelloWorldTheme extends Theme
    {
    }
}
```

## Linking a cascading style sheet file

A theme may link a cascading style sheet file for expressing the user interface skins in a concise way.

```as3
package
{
    import whack.themes.*;
    [StyleSheet(source="style.css")]
    public class HelloWorldTheme extends Theme
    {
    }
}
```

Example cascading style sheet:

```css
@namespace w "http://ns.whack.net/2024";

@font-face {
    fontFamily: "Open Sans";
    fontWeight: 100 700;
    fontStyle: normal;
    src: url("opensans.ttf");
}

w|Button {
    fontFamily: "Open Sans";
}
```

### Variables

In cascading style sheets, the function **PropertyReference**\(name\) resolves to a property within the theme class block, whether it is a static or instance property.