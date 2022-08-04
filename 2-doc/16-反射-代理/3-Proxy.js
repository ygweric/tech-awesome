
const target = {
  notProxied: "original value",
  proxied: "original value"
};

const handler = {
  get: function (target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    // return Reflect.get(...arguments);
    return target[prop];
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied);    // "replaced value"




const a = [
  {
    path: '4.mp3',
    isPlaying: true,
    lastBeginTime: 104,
    player: 'payer-1'
  },
  {
    path: '6.mp3',
    isPlaying: true,
    lastBeginTime: 106,
    player: 'payer-2'
  },
  {
    path: '5.mp3',
    isPlaying: false,
    lastBeginTime: 102,
    player: 'payer-3'
  },
]
isPlaying, lastBeginTime

6









