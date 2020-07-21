'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {schemes: ['https'], hostEquals: 'www.nytimes.com', pathPrefix: '/2020/'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});