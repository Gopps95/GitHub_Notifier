
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
const { Octokit } = require("@octokit/rest");

  const octokit = new Octokit({ auth: "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" });
  octokit.pulls.create({
    owner: "my-org",
    repo: "my-repo",
    title: "My pull request",
    head: "my-feature-branch",
    base: "main",
  }).then((response) => {
    console.log(response.data);
  
});
