window.addEventListener('load', () => {
    console.log('medium crack')

    const linkCache = new Set()

    setInterval(() => {
        console.log('start reload links')
        let newLinkCount = 0

        const links = document.links
        for (let i = 0; i < links.length; i++) {
            const url = links[i].href

            if (linkCache.has(url)) continue;

            newLinkCount++
            linkCache.add(url)

            links[i].style.color = "blue";
            links[i].addEventListener('click', (e) => {
                e.preventDefault()
                chrome.runtime.sendMessage({url: links[i].href}, (response) => {
                    console.log(response);
                });
            })
        }

        if (newLinkCount) console.log(`${newLinkCount} is added`)

    }, 500)
})


