function usageSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 ) * 100) / 100 + " kb";
}

let now = null

function load(params) {
    now =  performance.now()
}
function log(params) {
    console.log(`time : ${(performance.now() - now).toFixed(4)} ms, memory: ${usageSize()}`);
}

const memoryTime = {
    load,
    log
}

module.exports = memoryTime;