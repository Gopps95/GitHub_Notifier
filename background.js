
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
  const octokit = new Octokit({
    auth: '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'
  })
  
  await octokit.request('GET /notifications', {})