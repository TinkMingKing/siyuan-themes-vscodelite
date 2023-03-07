window.theme.addClassName = function (querySelector, className) {
    let mclass = document.querySelectorAll(querySelector);
    for (let n = 0; n < mclass.length; n++) {
        mclass[n].className += " " + className;
        console.log(mclass[n].className);
    }
    // mclass.className += " " + className;
    
    console.log("succee");
};

window.theme.addClassName("ul.fn__flex.layout-tab-bar", "mui-tabs__bar");

// window.theme.addClassName(".layout__center.fn__flex.fn__flex-1", "mui-panel");