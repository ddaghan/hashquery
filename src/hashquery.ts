'use strict';

interface Map {
    [key: string]: string;
}

function getWindowHash(): string {
    return window.location.hash.substr(1);
}

function removeHash () { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

function setWindowHash(queryString: string): void {
    if (!queryString || queryString === '#') {
        removeHash();
        return;
    }
    window.location.hash = queryString;
}

function parseQuery(queryString: string): Map {
    const pieces: string[] = queryString ? queryString.split('&') : [];
    const map: Map = {};
    pieces.forEach((piece) => {
        const keyVal = piece.split('=');
        const key = decodeURIComponent(keyVal[0]);
        if (!key) return;
        const val = decodeURIComponent(keyVal[1]);
        map[key] = val;
    });
    return map;
}

function prepareQuery(map: Map): string {
    let queryString: string = '';
    for (let key in map) {
        if (!key) continue;
        const val = map[key];
        queryString += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }
    return queryString.substr(1);
}

export function get(val: string): string {
    const queryString = getWindowHash();
    const map: Map = parseQuery(queryString);
    return map[val];
}

export function set4Href(key: string, val: string): string {
    const queryString = getWindowHash();
    const map: Map = parseQuery(queryString);
    map[key] = val;
    const newQueryString = prepareQuery(map);
    return '#' + newQueryString;
}

export function set(key: string, val: string): void {
    setWindowHash(set4Href(key, val));
}

export function del4Href(key: string) {
    const queryString = getWindowHash();
    const map: Map = parseQuery(queryString);
    delete map[key];
    const newQueryString = prepareQuery(map);
    return '#' + newQueryString;
}

export function del(key: string) {
    setWindowHash(del4Href(key));
}



