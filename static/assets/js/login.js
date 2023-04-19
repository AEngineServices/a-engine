sessionStorage.setItem("verified", "false");
var v = false;
var e = false;
var r = false;
var i = false;
var f = false;
var y = false;

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = "https://www.google.com/s2/favicons?domain=asdfasdfasdfcom&sz=16";

function login() {
    if (v === true && e === true && r === true && i === true && f === true && y === true) {
        localStorage.clear();
        sessionStorage.setItem("verified", "true");
        location.href = '/../';
    } else {
        v = false;
        e = false;
        r = false;
        i = false;
        f = false;
        y = false;
    }
    
}

document.addEventListener("keydown", function(zEvent) {
    if (zEvent.key === "v") { 
        if (v === false) {
            v = true;
        } else {
            v = false;
        }
        document.addEventListener("keydown", function(zEvent) {
            if (zEvent.key === "e") {
                if (e === false) {
                    e = true;
                } else {
                    e = false;
                }
                document.addEventListener("keydown", function(zEvent) {
                    if (zEvent.key === "r") {
                        if (r === false) {
                            r = true;
                        } else {
                            r = false;
                        }
                        document.addEventListener("keydown", function(zEvent) {
                            if (zEvent.key === "i") {
                                if (i === false) {
                                    i = true;
                                } else {
                                    i = false;
                                }
                                document.addEventListener("keydown", function(zEvent) {
                                    if (zEvent.key === "f") {
                                        if (f === false) {
                                            f = true;
                                        } else {
                                            f = false;
                                        }
                                        document.addEventListener("keydown", function(zEvent) {
                                            if (zEvent.key === "y") {
                                                if (y === false) {
                                                    y = true;
                                                } else {
                                                    y = false;
                                                }
                                                login();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
