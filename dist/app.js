"use strict";
function isSong(data) {
    return data.title !== undefined;
}
function play(data) {
    if (isSong(data)) {
        return data.title;
    }
    return data.name;
}
console.log(play({ title: 'Dua Lipa' }));
console.log(play({ name: 'ATB' }));
