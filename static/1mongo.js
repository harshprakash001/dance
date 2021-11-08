// Inserting data in mongo db
use harshKart
db.items.insertOne({name:"Samsung 305",price:22000,rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:"Samsung 305",price:22000,rating:4.5,qty:233,sold:98},{name:"Moto 305",price:22000,rating:3.5,qty:133,sold:598}])