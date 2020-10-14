window.addEventListener('load', () => {
    document.addEventListener('mousedown', (e) => {
        if (e.button === 2) {
            const origin = e.target.closest('a')
            console.log(origin.href)
            chrome.runtime.sendMessage({url: origin.href}, (response) => {
                console.log(response);
            });
        }
    })
})


