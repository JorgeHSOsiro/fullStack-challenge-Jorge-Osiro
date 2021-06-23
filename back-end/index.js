const express = require('express');

const cors = require('cors');
const schoolRouter = require('./routers/schoolRouter');
const directorRouter = require('./routers/directorRouter');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', schoolRouter);
app.use('/', directorRouter)

app.listen(port, () => console.log(`ouvindo em ${port}`));
