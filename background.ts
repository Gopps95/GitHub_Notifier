// @ts-ignore
chrome.alarms.create("checkNotifications", {
  periodInMinutes: 2 / 60
})
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "checkNotifications") {
    const list = (await notifications()) as Array<any>
    if (list.length > 0) {
      chrome.action.setBadgeText({
        text: list.length > 0 ? list.length.toString() : ""
      })
    }
  }
})

const notifications = async () => {
  return await fetch("https://api.github.com/notifications", {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: " Bearer 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"
    }
  }).then((response) => response.json())
}
