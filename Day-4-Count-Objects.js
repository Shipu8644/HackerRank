
function getCount(objects) {
    let c = 0;
    for (const e in objects) {
        if (objects[e].x === objects[e].y) {
            c++
        }
    }
    return c;
}

const count =
    [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 3, y: 4 },
        { x: 4, y: 5 }
    ]

const res = getCount(count);
console.log(res);