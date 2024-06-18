import {Elysia, t} from "elysia";
import HomePage from "../pages/home";
import addQuote from "../api/addQuote";

const homeController = (app: Elysia) => {
    return app
        .get("/", async () => await HomePage())
        .post("/add-quote", async ({body}) => await addQuote(body), {
            body: t.Object({
                quote: t.String(),
                name: t.String()
            })
        })
    
}

export default homeController