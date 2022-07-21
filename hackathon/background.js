//The extension service worker is the extension's event handler; it contains listeners for browser events that are important to the extension. It lies dormant until an event is fired then performs the instructed logic; it is only loaded when it is needed and unloaded when it goes idle. The service worker has access to all the Chrome APIs, as long it declares the required permissions in the manifest.json.
/*
https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
https://developer.chrome.com/docs/extensions/mv3/architecture-overview/#background_script
https://developer.chrome.com/docs/extensions/mv3/service_workers/


// "action": {
//   "default_title": "Untitled",
//   "default_icon": "#",
//   "default_popup": "popup/popup.html"
// },
// "icons": {
//   "16": "#",
//   "32": "#",
//   "48": "#",
//   "128": "#"
// },
// "key": "MIIBIjANBgk..."



*/

// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });
