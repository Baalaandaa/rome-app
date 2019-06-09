import express from "express";
const app = express();
const port = 8080;

import weather from "./weather";

app.get("/weather", async (req, res ) => {
    await res.json(await weather());
});

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
