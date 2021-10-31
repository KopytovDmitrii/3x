const alg = (x, prev, cb) => {
    cb(x, prev);
    if (x == 4) return;
    if (x % 2 == 0) {
        return alg(x / 2, x, cb);
    } else {
        return alg(x * 3 + 1, x, cb);
    }
}
module.exports = { alg };