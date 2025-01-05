A theme defines a cascading style sheet that may be applied to the Whack application. A theme is logical, therefore it is an `.as` file defining a class that extends `whack.themes.Theme`.

```as3
package
{
    import whack.components.*;
    import whack.themes.*;

    public class HelloWorldTheme extends Theme
    {
        override public function apply(app:Application):void
        {
            super.apply(app);
        }
    }
}
```

## Deriving themes

For deriving themes, it is recommended to call `themeObject.apply(app);` inside the `apply()` override, and **not to** extend the other theme class, as that allows executing the correct cascading style sheet for each theme (see below for linking cascading style sheets).

> Note that the `super.apply(app);` call executes any linked cascading style sheet; it is common to first derive any  desired themes and then finally call `super.apply(app);`.

```as3
package
{
    import whack.components.*;
    import whack.themes.*;
    import com.example.square.themes.SquareTheme;

    public class HelloWorldTheme extends Theme
    {
        private const squareTheme:Theme = new SquareTheme();

        override public function apply(app:Application):void
        {
            // Apply SquareTheme
            squareTheme.apply(app);
            // Apply cascading style sheet
            super.apply(app);
        }
    }
}
```

# Linking a cascading style sheet file

A theme may link a cascading style sheet file for expressing the user interface skins in a concise way, internally overriding the `applyCSSRules()` method.

```as3
package
{
    import whack.components.*;
    import whack.themes.*;

    [StyleSheet(source="style.css")]
    public class HelloWorldTheme extends Theme
    {
        override public function apply(app:Application):void
        {
            super.apply(app);
        }
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

## Variables

In cascading style sheets, the function **PropertyReference**\(name\) resolves to a property within the theme class block, whether it is a static or instance property.