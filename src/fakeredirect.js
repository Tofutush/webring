function fakeRedirect() {
    let url = new URLSearchParams(window.location.search);
    let originalSite = url.get('site');
    let mode = url.get('mode');
    let index;
    for (let z = 0; z < siteList.length; z++) {
        if (siteList[z].name.toLowerCase() === originalSite.toLowerCase()) {
            index = z;
            break;
        }
    }
    if (index === undefined) {
        window.location.assign(`./nosite.html?site=${originalSite}`);
        return;
    }
    switch (mode) {
        case 'prev':
            window.location.assign(siteList[index === 0 ? siteList.length - 1 : index - 1].url);
            break;
        case 'next':
            window.location.assign(siteList[index === siteList.length - 1 ? 0 : index + 1].url);
            break;
        case 'rand':
            window.location.assign(siteList[getRandomNumberButExcludeOne(0, siteList.length - 1, index)].url);
            break;
        default:
            throw new Error(`redirect mode ${mode} not found`);
    }
}

function getRandomNumberButExcludeOne(min, max, exclude) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (num === exclude);
    return num;
}