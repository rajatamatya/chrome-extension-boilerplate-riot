chrome.browserAction.setBadgeText({text:'ext'}),chrome.storage.local.get(['timer','timerState'],a=>{}),chrome.extension.onMessage.addListener((a,b,c)=>{}),chrome.runtime.onStartup.addListener(()=>{chrome.storage.local.get(['timer','timerState'],a=>{})}),chrome.windows.onRemoved.addListener(a=>{chrome.storage.local.set({timerState:timerState,timer:{totalTime:totalTime,startSeconds:startSeconds,startTimeInMS:startTimeInMS}})})