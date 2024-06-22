//  Building redis database

SET bike:1 Deimos
set bike:1 bike nx
mset bike:1 "Deimos" bike:2 "Ares" bike:3 "Vanth"
// mget bike:1 bike:2 bike:3

LPUSH bikes:repairs bike:1
LPUSH bikes:repairs bike:2
LPOP bikes:repairs
LPOP bikes:repairs
RPUSH bikes:repairs bike:1 bike:2 bike:3 bike:4 bike:5
LRANGE bikes:repairs 0 -1
// DEL bikes

SADD bikes:racing:france bike:2 bike:3
HSET bike:1 model Deimos brand Ergonom type 'Enduro bikes' price 4972
ZADD score 10 piyush
ZADD score 1 john
ZADD score 2 Jane
ZADD score 6 Pups
zrevrange score 0 1
zrank score piyush


// REDIS STREAMS === KAFKA
// EG: User clicks , sensor tracking, fast generating Data. 

XADD temperatures:us-ny:10007 * temp_f 87.2 pressure 29.69 humidity 46
"1719033532842-0"  // this number generated as a response means - this is the time stamp : this is the number of entries generated at that time frame.
XADD temperatures:us-ny:10007 * temp_f 87.2 pressure 29.69 humidity 47
XADD temperatures:us-ny:10007 * temp_f 87.2 pressure 29.69 humidity 48




