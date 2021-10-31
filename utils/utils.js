let node

const findNode = (obj, current = 0) => {
    
    if ( Object.keys(obj).length == 0) return;
    
    // if (obj[value]) {
    //     return obj[value];
    // };
    for (let i =0; i< Object.keys(obj).length; i++) {
        findNode(obj[Object.keys(obj)[i]], Object.keys(obj)[i])
    }
    console.log(current)
}

module.exports = { findNode, node };