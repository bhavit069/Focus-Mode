
chrome.webNavigation.onCompleted.addListener(function (details) {
    // get the URL of the page
    if (details.frameId === 0) {
        let pageURL = details.url;

        try {
            let domain = pageURL.split('/')[2];

            if (domain == 'www.youtube.com') {
                let route = pageURL.split('/')[3];

                setTimeout(() => {
                    if (route == '') {
                        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                            // Send a message to the content script
                            chrome.tabs.sendMessage(tabs[0].id, { action: "homescreen" });
                        });
                    }

                    if (route.split('?')[0] == 'watch') { 
                        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                            // Send a message to the content script
                            chrome.tabs.sendMessage(tabs[0].id, { action: "video" });
                        });
                    }

                    if (route.split('?')[0] == 'shorts') {
                        // Auto redirect to youtube home.
                        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                            // Check if there is an active tab
                            if (tabs && tabs.length > 0) {
                              // Update the URL of the active tab
                              chrome.tabs.update(tabs[0].id, { url: 'https://www.youtube.com/' });
                            }
                        });
                    }
                }, 500);

                
            }
        } catch (err) {
            
        }
    }
});

// Listen for changes in the browser tab
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // Check if the URL has changed
    let pageURL = changeInfo.url;

    if (changeInfo.url) {
        try {
            let domain = pageURL.split('/')[2];

            if (domain == 'www.youtube.com') {
                let route = pageURL.split('/')[3];

                if (route == '') { 
                    setTimeout(() => {
                        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                            // Send a message to the content script
                            chrome.tabs.sendMessage(tabs[0].id, { action: "homescreen" });
                        });
                    }, 500);
                }

                if (route.split('?')[0] == 'watch') {

                    setTimeout(() => {
                        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                            // Send a message to the content script
                            chrome.tabs.sendMessage(tabs[0].id, { action: "video" });
                        });
                    }, 500);

                }

                if (route.split('?')[0] == 'shorts') {
                    // Auto redirect to youtube home.
                    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                        // Check if there is an active tab
                        if (tabs && tabs.length > 0) {
                          // Update the URL of the active tab
                          chrome.tabs.update(tabs[0].id, { url: 'https://www.youtube.com/' });
                        }
                    });
                }
            }
            
        } catch (err) {
            
        }
    }
});




