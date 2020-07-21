'use strict';

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var articleURL = tabs[0].url;
    if (articleURL.includes("/opinion/")) {
        var articleType = document.getElementsByClassName("article-type")[0];
        articleType.innerHTML = "<strong>Opinion</strong>";
    } else {
        var articleType = document.getElementsByClassName("article-type")[0];
        articleType.innerHTML = "<strong>Objective</strong>";
    }
});