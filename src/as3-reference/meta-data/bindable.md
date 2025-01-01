The `[Bindable]` meta-data is used to trigger a `PropertyChangeEvent` event when one or more properties of a class are assigned. The event is only dispatched if `newValue !== prevValue` (notice the strict `!==` operator). 

It takes one of the following forms:

```as3
[Bindable]
[Bindable("eventName")]
[Bindable(event="eventName")]
```

If the event name is omitted, it defaults to `"propertyChange"`.

A setter is allowed to specify the `[Bindable]` meta-data.