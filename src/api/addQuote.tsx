import { Context } from "elysia";
import QuoteCard from "../components/quote-card";

export interface AddQuoteRequestBody {
    quote: string;
    name: string;
}

const addQuote = async (body: AddQuoteRequestBody) => {

    !body.name ?? console.log("Missing name");
    !body.quote ?? console.log("Missing quote")

    return <QuoteCard {...body} yearsOfLife="1000-2000"/>
}

export default addQuote;