import express from 'express'
import { MongoClient } from 'mongodb'; 




const PORT = 2525;
const app =  express();
const MONGO_URL = 'mongodb://127.0.0.1';
export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/" , function (request , response){
  response.send("Zen Class DataBase")
})

app.get("/users" ,async function (request , response){
  const users = await client
  .db('Zen_Class_DB')
  .collection('users')
  .find({})
  .toArray()
  
  response.send(users)  
})

app.get("/mentors" ,async function (request , response){
  const mentors = await client
  .db('Zen_Class_DB')
  .collection('mentors')
  .find({})
  .toArray()

  response.send(mentors) 
})

app.get("/october" ,async function (request , response){
  const october_data = await client
  .db('Zen_Class_DB')
  .collection('OCT_DATA')
  .find({})
  .toArray()

  response.send(october_data)  
})
 
app.get("/november" ,async function (request , response){
  const november_data = await client
  .db('Zen_Class_DB')
  .collection('NOV_DATA')
  .find({})
  .toArray()

  response.send(november_data)  
})

app.get("/december" ,async function (request , response){
  const december_data = await client
  .db('Zen_Class_DB')
  .collection('DEC_DATA')
  .find({})
  .toArray()

  response.send(december_data)  
})

app.listen(PORT, ()=> console.log(`The server started in : ${PORT}`))

 
