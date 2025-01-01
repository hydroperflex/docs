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
* The `type` entry refers to a class identifying the event object, such as `Event`.
* The `@eventType` ASDoc tag refers to a static constant property equivalent to the event type.