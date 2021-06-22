const express = require('express');

const cors = require('cors');
const schoolRouter = require('./routers/schoolRouter');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', schoolRouter);

app.listen(port, () => console.log(`ouvindo em ${port}`));
