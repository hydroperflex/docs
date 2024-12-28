# Declaring an event

Event class:

```as3
package
{
    import whack.events.*;

    public class HelloWorldEvent extends Event
    {
        public static const TRIGGER:String = "trigger";

        public function HelloWorldEvent(type:String)
        {
            super(type);
        }
    }
}
```

Event dispatcher:

```as3
package
{
    import whack.events.*;

    /**
     * @eventType HelloWorldEvent.TRIGGER
     */
    [Event(name="trigger", type="HelloWorldEvent")]
    /**
     * Hello World
     */
    public class HelloWorldDispatcher extends EventDispatcher
    {
        // code
    }
}
```