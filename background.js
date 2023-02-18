
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
  const express = require('express')
const app = express()

app.use(manifest.json())

app.post('/webhook', (req, res) => {
  const data = req.body
  // Do something with the data
  res.send('Webhook received')
})

app.listen(3000, () => console.log('Webhook server listening on port 3000'))
