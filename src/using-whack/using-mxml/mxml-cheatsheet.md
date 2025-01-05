# Importing the Whack namespace

```
xmlns:w="http://ns.whack.net/2024"
```

# Importing an ActionScript package as a namespace

```
xmlns:xy="com.x.y.*"
```

Recursive:

```
xmlns:xy="com.x.y.**"
```

# Data binding

```
text="Last password: {password.text}"
```

# Handling an event

```
click="trace('click event:', event);"
```

# Inserting Markdown

```mxml
<w:markdown>
    <![CDATA[
        # Title

        Paragraph **number** 1
        
        - Item a.
        - Item b.
    ]]>
</w:markdown>
```

# Inserting HTML binding

```mxml
<w:html value="{source.value}"/>
```