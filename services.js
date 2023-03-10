import { client } from "./index.js";

export async function users() {
  return await client.db("Zen_Class_DB").collection("users").find({}).toArray();
}

export async function mentors() {
  return await client
    .db("Zen_Class_DB")
    .collection("mentors")
    .find({})
    .toArray();
}

export async function october_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("OCT_DATA")
    .find({})
    .toArray();
}

export async function november_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("NOV_DATA")
    .find({})
    .toArray();
}

export async function december_data() {
  return await client
    .db("Zen_Class_DB")
    .collection("DEC_DATA")
    .find({})
    .toArray();
}
