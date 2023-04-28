const express = require("express");
const { getPool } = require("./database");
const app = express();

const port = 3000

// other libraries
app.use(express.json());

// routers and middlewares
// user
const userRouter = require("./routers/user_router");
app.use("/", userRouter);

// checklist
const checklistRouter = require("./routers/checklist_router");
app.use("/checklist", checklistRouter);

// listen
app.listen(port);