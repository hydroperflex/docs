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

# Inserting XHTML

```mxml
<w:xhtml>
    <h1>Title</h1>
    <p>Paragraph <b>number</b> <i>1</i></p>
    <ul>
        <li>Item a.</li>
        <li>Item b.</li>
    </ul>
</w:xhtml>
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