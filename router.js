import express from 'express';
import {
  users,
  users_absent,
  users_codekata,
  mentors,
  mentors_mentees_data,
  october_1to15_data,
  october_data,
  november_data,
  december_data,
} from './services.js';

const router = express.Router()


// ----------------------Zen Class Users Data ------------------------------

router.get("/users", async function (request, response) {
  const users_data = await users();

  response.send(users_data);
});


// ----------------------Zen Class Users absent Data ------------------------------

router.get("/absent_users", async function (request, response) {
  const users_absent_data = await users_absent();

  response.send(users_absent_data);
});


// ----------------------Zen Class Users codekata Data ------------------------------

router.get("/users", async function (request, response) {
  const users_codekata_data = await users_codekata();

  response.send(users_codekata_data);
});


// ----------------------Zen Class mentors Data ------------------------------

router.get("/mentors", async function (request, response) {
  const mentors_data = await mentors();

  response.send(mentors_data);
});


// ----------------------Zen Class mentor mentees Data ------------------------------

router.get("/mentors_mentees", async function (request, response) {
  const mentors_mentees = await mentors_mentees_data();

  response.send(mentors_mentees);
});


// ----------------------Zen Class october Data ------------------------------

router.get("/october", async function (request, response) {
  const october = await october_data();

  response.send(october);
});


// ----------------------Zen Class october 1 to 15 Data ------------------------------

router.get("/october_1to15", async function (request, response) {
  const october1_15 = await october_1to15_data();

  response.send(october1_15);
});


// ----------------------Zen Class november Data ------------------------------

router.get("/november", async function (request, response) {
  const november = await november_data();

  response.send(november);
});


// ----------------------Zen Class december Data ------------------------------

router.get("/december", async function (request, response) {
  const december = await december_data();

  response.send(december);
});



export default router;
