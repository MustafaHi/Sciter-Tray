# Sciter-Tray
Sciter Tray Menu in Tiscript v2.0


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


## Customizing
To set the menu to a popup set `trayMenu = $('popup selector')`
and check `demo.htm` for further guidance.

To change the items in tray menu edit `tray.htm`

To uncenter the tray menu set `trayCenter = false;`

If you want your app to close to tray:
```js
event click $('close button selector') { trayIcon ? view.state = View.WINDOW_HIDDEN : view.close(); }
```
