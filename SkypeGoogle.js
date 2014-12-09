chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
	var splitURI = details.url.split("=")[1].split("&")[0].replace("%20", "+");
    return {redirectUrl: "https://www.google.com/#q=" + splitURI};
  },
  {urls: ["http://*.bing.com/*"]},
  ["blocking"]
);