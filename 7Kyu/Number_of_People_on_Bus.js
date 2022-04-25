var number = function(busStops){
    return busStops.map(element => element[0]).reduce((a, v) => a + v, 0) - busStops.map(element => element[1]).reduce((a, v) => a + v, 0)
}
