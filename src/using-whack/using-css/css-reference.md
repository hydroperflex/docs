Cascading Style Sheet (CSS) is a subset of the world wide web Cascading Style Sheet 3 language used for skinning the user interface in an expressive way over existing ActionScript definitions.

# Basic sheets

The following sheet customizes the font family and weight of `Label` objects that are heading titles:

```css
@namespace w "http://ns.whack.net/2024";

w|Label[variant=heading] {
    fontFamily: segoe ui, sans;
    fontWeight: lighter;
}
```