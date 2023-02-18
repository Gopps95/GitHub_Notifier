import { Octokit, App } from "https://cdn.skypack.dev/octokit";

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
  
 octokit.request('GET /notifications', {}).then((data) => {

  console.log(data)
 });
