import express from "express";
const app = express();
const port = 8080;

import fromRoman from "./numbers";
import weather from "./weather";

app.get("/weather", async (req, res ) => {
    return res.json(await weather());
});

app.get("/arabic", async (req, res) => {
    const num: string = req.query.number + "";
    if (!req.query.number) {
        return res.json({ok: false});
    }
    res.json({result: fromRoman(num), ok: true});
});

app.listen(port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
