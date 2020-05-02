# Sciter-Tray
Sciter Tray Menu in Tiscript - v3.0


## Install
Just include those files to your resources/UI folder
```
tray.tis
tray.htm
TrayIcon06.png // optional, replace with your own tray icon
```
then include tray.tis in your project either
in HTML :
```html
<script src="tray.tis" type="text/tiscript"></script>
```
or in script file:
```php
include "tray.tis";
```
then
```js
initTray(true); // false to remove
```
or add your own create tray icon function


## Customizing
To set the menu to a popup set `trayMenu = $(popup selector)`, check `demo.htm` for further guidance.

To change the items in tray menu edit `tray.htm`

To uncenter the tray menu set `trayCentered = false;`

If you want your app to close to tray:
```js
event click $(close button selector) { view.trayIcon(#place) ? view.state = View.WINDOW_HIDDEN : view.close(); }
```
