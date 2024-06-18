import { Elysia } from "elysia";

// Plugins
import staticPlugin from "@elysiajs/static";
import { html } from "@elysiajs/html";

// Modules
import { getExampleListHtml, quotesExamples } from './config/test';
import QuoteCard from "./components/quote-card";
import Layout from "./components/layout";
import HomePage from "./pages/home";


const app = new Elysia()
  .use(html())

  .get("/", () => HomePage())
  .get('/quotes', getExampleListHtml)
  .listen(3000)



  
//
// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );

