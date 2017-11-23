(function () {
    var methods = [];
    var noop = () => {};


    Object.keys(window.console).forEach(key => {
        
        methods.push(key);
        
    });
    console.log(methods);
    //["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "group", "groupCollapsed", "groupEnd", "clear", "count", "assert", "markTimeline", "profile", "profileEnd", "timeline", "timelineEnd", "time", "timeEnd", "timeStamp", "context", "memory"];
    var length = methods.length;

    var m;
    while (length--) {
        m = methods[length];
        window.console[m] = noop;
    }
}());


