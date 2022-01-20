function $ (selector, el) {
    if (!el) {el = document;}
    return el.querySelector(selector);
}

function tryDiscard(event) {
    let id = parseInt(event.target.parentElement.dataset.tabid);
    // if I generalize this function, maybe instead use event.target.closest("#lmao > tbody > tr")
    browser.tabs.discard(id).then(
        () => {
            browser.tabs.get(id).then((tabInfo) => {
                if (tabInfo.discarded)
                {
                    event.target.classList.add("discarded");
                    console.log("discarded " + id)
                }
            })
        },
        (error) => {
            console.log(`Error: ${error}`);
        }
    );
}

function postTabs(tabs) {
    let tbody = $("#lmao > tbody");
    for (let tab of tabs) {
        let tr = document.createElement("tr");
        tr.dataset.tabid = tab.id;
        let td0 = document.createElement("td");
        let td1 = document.createElement("td");
        td0.innerText = tab.title;
        td0.title = tab.url;
        td1.innerText = String(tab.autoDiscardable) + ", " + String(tab.windowId) + ", " + String(tab.id);

        let tdicon = document.createElement("td");
        if (tab.favIconUrl != undefined)
        {
            let icon = document.createElement("img");
            icon.src = tab.favIconUrl;
            icon.classList.add("favicon");
            tdicon.appendChild(icon);
        }
        tr.appendChild(tdicon);

        tr.appendChild(td0);
        tr.appendChild(td1);

        /*
        I don't want to implement this yet

        //close button
        let closeButton = document.createElement("input");
        closeButton.type = "button";
        closeButton.value = "X";
        let tdclose = document.createElement("td");
        tdclose.appendChild(closeButton);
        tr.appendChild(tdclose);
        */

        tbody.appendChild(tr);
        td0.onclick = tryDiscard;
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    let querying = browser.tabs.query({discarded:false});
    querying.then(postTabs);
});
