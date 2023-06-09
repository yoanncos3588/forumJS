require(`dotenv`).config();
const express = require(`express`);
const app = express();

const router = require(`./app/router`);
const path = require(`path`);

app.use(express.static(`public`));
app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `app/views`));

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
})

