window.onload = function() {
    chrome.storage.local.get('blockComments', (result) => {
        let blockCommentsValue = result.blockComments;

        const observer = new MutationObserver( (mutations) => {
            let elem = document.getElementById("comments");
            if (elem && elem.hidden !== blockCommentsValue) {
                elem.hidden = blockCommentsValue;
            }
        });
    
        const body = document.body;
        observer.observe(body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    });
}