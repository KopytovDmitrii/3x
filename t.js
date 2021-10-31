const fs = require('fs');
const { json } = require('stream/consumers');


const alg = require('./alg/alg');
const utils = require('./utils/utils');

let tree = {};
let n = 4

const algCB = (x, prev) => {
    let node = utils.findNode(tree, x);
    if (node) {
        if (!node[prev]) {
            node[prev] = tree[prev];
            // delete node[prev]
        }
    } else {
        if (prev) {
            tree[x] = tree[prev]
            delete tree[prev];
        } else {
            tree[x] = null
        }
    }
}

// alg.alg(7, null, algCB);
// alg.alg(20, null, algCB);
// alg.alg(25, null, algCB);

// for (i = 4; i < 20; i++) {
//     alg.alg(i, null, algCB);
// }

// fs.writeFileSync('hello.json', JSON.stringify(tree))

let a = {
    1: {
        2: {
            4: {
                5: {},
                6: { 
                    7: {}
                },
            },
            3: {},
            
        }
    }
}

utils.findNode(a);
// console.log(node);
