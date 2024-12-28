Here is an example entry point as a MXML component:

```mxml
<!-- src/com/example/ExampleApplication.mxml -->
<?xml version="1.0"?>
<w:Application xmlns:w="http://ns.whack.net/2024">
    <w:Label text="Hello, world!"/>
</w:Application>
```

Here is an example entry point as an ActionScript component:

```actionscript
package com.example
{
    import whack.core.*;
    import whack.controls.*;

    public class ExampleApplication extends Application
    {
        public function ExampleApplication()
        {
            super();

            const label = new Label("Hello, world!");
            this.addChild(label);
        }
    }
}
```