let color = "#ccc";

chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage.sync.set({ color });
  console.log("installed");
});
