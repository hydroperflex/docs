The `[Event]` meta-data documents an event that is likely dispatched by a class. It takes the following form:

```as3
/**
 * @eventType T.EVENT_NAME
 */
[Event(name="eventName", type="T", bubbles="false|true")]

// class
```

Notes:

* The ASDoc comment, the `@eventType` ASDoc tag and the `bubbles` entry are optional.
* The `name` entry is the event type string.
* The `@eventType` ASDoc tag links a static constant property equivalent to the event type.