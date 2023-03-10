import express from 'express';
import {
  users,
  mentors,
  october_data,
  november_data,
  december_data,
} from './services.js';

const router = express.Router()

router.get("/users", async function (request, response) {
  const users_data = await users();

  response.send(users_data);
});
router.get("/mentors", async function (request, response) {
  const mentors_data = await mentors();

  response.send(mentors_data);
});
router.get("/october", async function (request, response) {
  const october = await october_data();

  response.send(october);
});
router.get("/november", async function (request, response) {
  const november = await november_data();

  response.send(november);
});
router.get("/december", async function (request, response) {
  const december = await december_data();

  response.send(december);
});

export default router;
