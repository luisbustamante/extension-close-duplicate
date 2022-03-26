closeDupes.addEventListener("click", async () => {
  let tabs = await chrome.tabs.query({});
  let dupes = [];
  let walked = [];
  let activeTabId = 0;
  tabs.forEach(function (tab) {
    if (walked.indexOf(tab.url) !== -1) {
      dupes.push(tab.id);
    }
    walked.push(tab.url);
  });
  if (dupes.length > 0) {
    chrome.tabs.remove(dupes, () => alert(`Closed ${dupes.length}`));
  } else {
    alert("No duplicates to remove!");
  }
});
