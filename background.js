
chrome.webNavigation.onBeforeNavigate.addListener(
  ({ url, tabId }) => {
    if (url != null) {
      const target = "https://medium.com"
      const splittedUrl = url.split(target)
      if (splittedUrl[0] == '') {
        // make chrome do the redirect 
        const redirectUrl = `https://mirror-medium.com/?m=${url}`
        chrome.tabs.update(
          tabId,
          {
            active: true,
            url: redirectUrl
          }
        )
      }
    }
  }
)

