# Sciter-Tray
Sciter Tray Menu in Tiscript


## Install
Just include those files to your resources/UI folder
```
tray.tis
tray.htm
TrayIcon06.png // optional, replace with your own tray icon
```
then include tray.tis into your project either
to HTML :
```html
<script src="tray.tis" type="text/tiscript"></script>
```
or to main script file:
```php
include "tray.tis";
```
then
```js
initTray();
```
or add your own create tray icon function


## customizing

To change the items in tray menu edit `tray.htm`
after changing it you need to change the width and height in `tray.tis`

To uncenter the tray menu set `trayCenter = false;`
before your initTray() function call

If you want your app to close to tray:
```js
event click $(#close) { trayIcon ? view.state = View.WINDOW_HIDDEN : view.close(); }
```
