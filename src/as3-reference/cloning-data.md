Whack should be able to clone objects automatically through the static `Object.clone()` method, where collections (`Array.<T>`, `Vector.<T>`, `Map.<K, V>`) and user classes are cloned properly. User classes are by default cloned property by property, including its variables and its virtual variables.

If it is desired, it is possible to define a `clone()` method customizing how an object is cloned, as the following program demonstrates:

```as3
package
{
    public class MyBox
    {
        public function clone():MyBox
        {
            // default behavior
            return Object.clone(this);
        }
    }
}
```