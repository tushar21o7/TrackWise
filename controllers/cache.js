const {LRUCache} = require('lru-cache');
let cache = new LRUCache({ max: 10 });

module.exports = cache;