# NodeJs ExpressJs MongoDB

## Concepts
* REST API principals
    * CRUD
    * HTTP methods

## Technologies
* NodeJs
* MongoDB with Mongoose
* TypeScript
* ExpressJs

## API

#### Create Blockchain Node
```http
POST http://localhost:8081/api/blockchain/node
```
```javascript
{
    "tx_hash" : "35",
    "from" : "Ipsita",
    "to" : "Kaustav",
    "timestamp" : "Friday, 12 November 2021 17:59:20 GMT+08:00",
    "value" : "21"
}
```
#### Get Blockchain Node
```http
GET http://localhost:8081/api/blockchain/:tx_hash
```
#### Delete Blockchain Node

```http
DEL http://localhost:8081/api/blockchain/:tx_hash
```
#### Create Blockchain
```http
POST http://localhost:8081/api/blockchain/node
```
```javascript
[
    {
        "tx_hash" : "34",	
        "from" : "Raj",
        "to" : "Ipsita",
        "timestamp" : "Friday, 12 November 2021 17:58:20 GMT+08:00",
        "value" : "17.5"
    },
    {
        "tx_hash" : "35",
        "from" : "Ipsita",
        "to" : "Kaustav",
        "timestamp" : "Friday, 12 November 2021 17:59:20 GMT+08:00",
        "value" : "21"
    }
]
```
#### Get Blockchain
```http
GET http://localhost:8081/api/blockchain
```
#### Get Blockchain Via Orgin and Hops
```http
GET http://localhost:8081/api/blockchain/:origin/:hops
```
#### Delete Blockchain Node
```http
DEL http://localhost:8081/api/blockchain/remove
```
