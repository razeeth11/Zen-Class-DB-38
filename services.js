import { client } from "./index.js";


// ----------------------Zen Class Users Data ------------------------------

export async function users() {
  return await client
  .db("Zen_Class_DB")
  .collection("users")
  .find({})
  .toArray();
}


// ----------------------Zen Class Users codekata Data ------------------------------

export async function users_codekata() {
  return await client
  .db("Zen_Class_DB")
  .collection("users")
  .find({},{name:1,codekata:1,_id:0})
  .toArray();
}


// ----------------------Zen Class Users absent Data ------------------------------

export async function users_absent() {
  return await client
  .db("Zen_Class_DB")
  .collection("OCT_DATA")
  .find({day : {$gte : 15 , $lte : 31}},{date:1,absentees : 1,task:1,_id:0})
  .toArray();
}


// ----------------------Zen Class mentors Data ------------------------------

export async function mentors() {
  return await client
    .db("Zen_Class_DB")
    .collection("mentors")
    .find({})
    .toArray();
}


// ----------------------Zen Class mentor mentees Data ------------------------------

export async function mentors_mentees_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("mentors")
    .find({mentees: {$gte : 15}},{name:1,mentees:1,_id:0})
    .toArray();
}


// ----------------------Zen Class october Data ------------------------------

export async function october_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("OCT_DATA")
    .find({})
    .toArray();
}


// ----------------------Zen Class october 1 - 15 Data ------------------------------

export async function october_1to15_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("OCT_DATA")
    .find({ day: { $gte: 1, $lte: 15 } }, { date:1, task: 1, topic: 1, _id:0 })
    .toArray();
}



// ----------------------Zen Class november Data ------------------------------

export async function november_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("NOV_DATA")
    .find({})
    .toArray();
}


// ----------------------Zen Class december Data ------------------------------

export async function december_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("DEC_DATA")
    .find({})
    .toArray();
}
