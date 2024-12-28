MXML files insert ActionScript code through a `<w:Script>` tag containing code inside a `<![CDATA[ ... ]]>` markup.

```mxml
<!-- src/com/example/ExampleApplication.mxml -->
<?xml version="1.0"?>
<w:Application xmlns:w="http://ns.whack.net/2024">
    <w:Script><![CDATA[
        // ActionScript
    ]]></w:Script>
</w:Application>
```

For initialiser code, handle the `creationComplete` event in the `<w:Application>` tag:

```mxml
<?xml version="1.0"?>
<w:Application
    xmlns:w="http://ns.whack.net/2024"
    creationComplete="initialise()">
    <w:Script><![CDATA[
        private function initialise():void
        {
            trace("Hello world");
        }
    ]]></w:Script>
</w:Application>
```