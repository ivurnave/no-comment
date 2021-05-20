// cached value
let blockCommentsValue = false;

chrome.storage.local.get('blockComments', (result) => {
    blockCommentsValue = result.blockComments;
    document.getElementById("checkbox").checked = blockCommentsValue;
    setCommentsLabel();
});

window.onload = function () {
    document.getElementById("checkbox").onclick = toggleComments;
}

function toggleComments() {
    blockCommentsValue = !blockCommentsValue;
    chrome.storage.local.set({'blockComments': blockCommentsValue}, () => {
        console.log("block comments value set in storage");
    });
    
    setCommentsLabel();
}

function setCommentsLabel() {
    let commentsStatus = document.getElementById("comments-status");
    if (blockCommentsValue) {
        commentsStatus.innerText = "Comments blocked"
    } else {
        commentsStatus.innerText = "Comments allowed"
    }
}