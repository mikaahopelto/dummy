import html from "./data/default.ts";
import { Hono } from "hono";
import bookings from "./data/bookings.ts";
import prices from "./data/prices.ts";
import calendar from "./data/calendar.ts";
import forecast from "./data/forecast.ts";

const app = new Hono();
app.get("/", (c) => c.html(html));
app.get("/bookings", (c) => c.json(bookings));
app.get("/prices", (c) => c.json(prices));
app.get("/calendar", (c) => c.json(calendar));
app.get("/forecast", (c) => c.json(forecast));

export default app;
