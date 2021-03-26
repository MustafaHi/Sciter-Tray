# Sciter-Tray
Sciter Tray Menu
```lua
> Tiscript   : 4.0.0
> Javascript : 4.0.0
```

## Install
Just include those files to your resources/UI folder
```c#
tray.tis     // OR tray.js
tray.htm     // if you want to use as separate window for menu
trayicon.png // optional, replace with your own tray icon
```
Then include script file in your project either  
in HTML :
```html
<script src="tray.tis" type="text/tiscript"></script> // OR
<script src="tray.js"  type="text/javascript"></script>
```
or in script file:
```js
include "tray.tis"; // OR
import { Tray } from "tray.js"; // Prefix line:16 in tray.js with `export`
```
then
```js
// default arguments, pass `false` to remove
Tray.init(init = true, text = "Welcome!", icon = "trayicon.png")
```
or add your own create tray icon function.

## Customizing
To set the menu to a popup set `Tray.menu = Element;` check `demo.htm` for further guidance.

```js
Tray {
    center: true,      // Center Tray menu
    menu  : undefined, // Will create window for menu unless given one.
    init  : function (True|False, "text", "iconPath")
}
```
