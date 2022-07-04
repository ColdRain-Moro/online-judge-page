
export function getQueryVariable(key: string): string | null {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] == key) { return pair[1]; }
    }
    return null;
}

export function addOrUpdateQuery(key: string, value: string, flush = false) {
    let url = flush ? location.href : location.hash;

    if (!url.includes('?')) {
        url = `${url}?${key}=${value}`;
    } else {
        if (!url.includes(key)) {
            url = `${url}&${key}=${value}`;
        } else {
            const re = `(\\?|&|\#)${key}([^&|^#]*)(&|$|#)`;
            url = url.replace(new RegExp(re), '$1' + key + '=' + value + '$3');
        }
    }

    if (flush) {
        location.href = url;
    } else {
        history.pushState({}, '', url);
    }
}