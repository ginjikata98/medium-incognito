chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.url) {
        sendResponse({url: request.url});
        chrome.windows.create({
            url: request.url,
            incognito: true
        })
    }
});
