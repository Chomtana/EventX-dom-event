import evx from 'eventx-core';

if (typeof window !== "undefined" && !window.evx) window.evx = evx;

function kebab(string) {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

evx.createEvent("attrchange",function(target,callback) {
    var config = { attributes: true, attributeOldValue: true};

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            callback(mutation);
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createVarEvent("attrchange",function(target,args,callback) {
    var config = { attributes: true, attributeOldValue: true, attributeFilter: [args[0]]};

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target) callback(mutation);
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createEvent("childnodeadded",function(target,callback) {
    var config = { childList: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node=>{
                    if (node.constructor.name != "Text") {
                        mutation.addedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createVarEvent("childnodeadded",function(target,args,callback) {
    var config = { childList: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node=>{
                    if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                        mutation.addedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createEvent("childnodeadded_deep",function(target,callback) {
    var config = { childList: true , subtree: true};

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node=>{
                    if (node.constructor.name != "Text") {
                        mutation.addedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createVarEvent("childnodeadded_deep",function(target,args,callback) {
    var config = { childList: true , subtree: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node=>{
                    if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                        mutation.addedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createEvent("childnoderemoved",function(target,callback) {
    var config = { childList: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.removedNodes.length > 0) {
                mutation.removedNodes.forEach(node=>{
                    if (node.constructor.name != "Text") {
                        mutation.removedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createVarEvent("childnoderemoved",function(target,args,callback) {
    var config = { childList: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.removedNodes.length > 0) {
                mutation.removedNodes.forEach(node=>{
                    if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                        mutation.removedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createEvent("childnoderemoved_deep",function(target,callback) {
    var config = { childList: true , subtree: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.removedNodes.length > 0) {
                mutation.removedNodes.forEach(node=>{
                    if (node.constructor.name != "Text") {
                        mutation.removedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createVarEvent("childnoderemoved_deep",function(target,args,callback) {
    var config = { childList: true , subtree: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.removedNodes.length > 0) {
                mutation.removedNodes.forEach(node=>{
                    if (node.nodeName.toUpperCase() == args[0].toUpperCase()) {
                        mutation.removedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createEvent("textnodeadded",function(target,callback) {
    var config = { childList: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node=>{
                    if (node.constructor.name == "Text") {
                        mutation.addedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

evx.createEvent("textnoderemoved",function(target,callback) {
    var config = { childList: true };

    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target && mutation.removedNodes.length > 0) {
                mutation.removedNodes.forEach(node=>{
                    if (node.constructor.name == "Text") {
                        mutation.removedNode = node;
                        callback(mutation);
                    }
                });
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});

/*evx.createEvent("textnodechanged",function(target,callback) {
    var config = { characterData: true, characterDataOldValue: true, childList: true,subtree: true };

    console.log("aaa");
    const ob = new MutationObserver(mutationsList => {
        for (var mutation of mutationsList) {
            if (mutation.target == target) {
                callback(mutation);
            }
        }
    });

    ob.observe(target,config);

    return function() {
        //ob.unobserve(target);
        ob.disconnect();
    }
});*/

export default evx;