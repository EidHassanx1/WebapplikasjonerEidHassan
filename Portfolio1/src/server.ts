import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "path";

const app = new Hono();

const dataPath = resolve('./data.json');

app.use("/*", cors());

app.use("/statics/*", serveStatic({ root: "./" }));

app.get("/json", async (c) => {
    try {
        const data = await readFile(dataPath, "utf-8");
        const parsedData = JSON.parse(data);
        return c.json(parsedData);
    } catch (error) {
        console.error("Error reading JSON data:", error);
        return c.json({ message: "Error reading data.json", error }, 500);
    }
});

app.post("/leggTil", async (c) => {
    try {
        const newProsjekt = await c.req.json();

        const data = await readFile(dataPath, "utf-8");
        const parsedData = JSON.parse(data);

        parsedData.Prosjekt.push(newProsjekt);

        await writeFile(dataPath, JSON.stringify(parsedData, null, 2));

        return c.json({ message: "Project added successfully!" });
    } catch (error) {
        console.error("Error adding project:", error);
        return c.json({ message: "Failed to add project", error }, 500);
    }
});

const port = 5454;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
