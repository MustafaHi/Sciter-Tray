//| Sciter Tray Menu v4.0.0
//| https://github.com/MustafaHi/Sciter-Tray

// Tray.menu   = undefined; Give it a Window or Element to use as menu.
// Tray.center = true;      True to center the menu to the TrayIcon.
// document.url is not relative if this is inside a folder you must name the folder document.url("folder/tray.htm")

if(!Number.prototype.limit) {
    Number.prototype.limit = function(min,max) {
      if (this < min) return min;
      if (this > max) return max;
      return this;
    }
}

const Tray = { // Prefix with `export` to use as module
    center: true,
    menu  : undefined,
    init  : async function(init = true, content = "Welcome!", icon = "trayicon.png") {
        if (init) {
            Window.this.trayIcon ({
              image: await Graphics.Image.load(document.url(icon)),
              text: content
            });
        } else {
            Window.this.trayIcon("remove"); 
        }
    }
};

Window.this.on("trayiconclick", function(evt) {
// if the main app window not showing on top add  Window.this.isTopmost = true;  then  Window.this.isTopmost = false;
    var view = Window.this;
    if (evt.data.buttons == 1) { view.state = Window.WINDOW_SHOWN; view.isTopmost = true; view.isTopmost = false; }
    else {
        if (Tray.menu instanceof Element) {
            Tray.menu.focus();
            var [tx,ty] = view.trayIcon("place");
            var [sx,sy] = view.box("position", "client", "screen");
            Tray.menu.popupAt(tx-sx, ty-sy, (Tray.center ? 2 : 1));
        }
        else {
            
            if (Tray.menu == undefined) {
                Tray.menu = new Window({
                    url  : document.url("tray.htm"),
                    state: Window.WINDOW_HIDDEN,
                    type : Window.POPUP_WINDOW,
                });
            }
            
            var x, y;
            var w = Tray.menu.document.state.contentWidths()[0];
            var h = Tray.menu.document.state.contentHeight(w);
            var [tx,ty,tw,th]     = view.trayIcon("place");
            var [sX1,sY1,sX2,sY2] = view.screenBox("workarea", "rect");
            if (Tray.center) {
                tx < sX1 ? x = sX1 : (tx > sX2 ? x = (sX2 - w) : x = (tx-(w/2))+(tw/2));
                ty < (sY1*4) ? y = (ty + th) : (ty > sY2 ? y = (sY2 - h) : y = ty-h);
                tx < sX1 || tx - sX2 > 0 ? y += (h/2) : "";
            } else {
                tx < (sX1*4) ? x = tx : (tx > sX2 ? x = (sX2 - w) : x = tx);
                ty < (sY1*4) ? y = (ty + th) : (ty > sY2 ? y = (sY2 - h) : y = ty-h);
            }

            Tray.menu.move(x.limit(0, sX2-w), y.limit(0, sY2-h), w, h, true);
            Tray.menu.state = Window.WINDOW_SHOWN;
            Tray.menu.isTopmost = true;
            Tray.menu.document.state.focus = true;

            // Functions for tray.htm
            Tray.menu.document.on("click", "#show", () => { view.state = Window.WINDOW_SHOWN;      });
            Tray.menu.document.on("click", "#hide", () => { view.state = Window.WINDOW_HIDDEN;     });
            Tray.menu.document.on("click", "#exit", () => { view.trayIcon("remove"); view.close(); });
            Tray.menu.on("activate", (evt) => { if (evt.reason == 0) Tray.menu.state = Window.WINDOW_HIDDEN; });
        }
    }
});
