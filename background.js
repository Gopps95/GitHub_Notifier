
chrome.browserAction.onClicked.addListener(function(tab) {
    
    chrome.runtime.openOptionsPage();
  });
  

  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === "notification") {
      
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "GitHub Notification",
        message: message.text
      });
    }
  });
  