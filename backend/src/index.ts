import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("WoodWorks Api Working Fine!");
});

app.listen(8080, (): void => {
    console.log(`Server is up at 8080`);
});