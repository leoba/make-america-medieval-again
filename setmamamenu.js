// setmamamenu.js - part of make america kittens again
// v1.1.3
// by Tom Royal 
// tomroyal.com

// sets up a menu item to invoke the de-kittening

function DeMamaMenuClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "undoMAMA"
        });
    });
}
/*
function ReMamaMenuClick(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "redoMAMA"
        });
    });
}
*/

var setMAMAmenu1 = chrome.contextMenus.create({"title": "Make Kittens Trump Again :(", "contexts":["page"], "onclick": DeMamaMenuClick});
// var setMAMAmenu2 = chrome.contextMenus.create({"title": "MORE KITTENS", "contexts":["page"], "onclick": ReMamaMenuClick});