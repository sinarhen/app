import AddQuoteForm from "../components/add-quote-form";
import Layout from "../components/layout";
import QuoteCard from "../components/quote-card";
import { quotesExamples } from "../config/test";

const HomePage = () => (
      <Layout title="Quotage | Home Page">
        <>
          <div class="min-h-full w-[30%] relative">
            <div class="fixed w-[30%] flex items-center justify-center h-full text-white z-50 bg-zinc-800 ">              
                <AddQuoteForm 
                    hxPost="/add-quote" 
                    hxTarget="quotes" 
                    hxSwap="afterbegin" 
                />
            </div>
          </div>
          <div id="quotes" class="w-[70%] grid gap-x-1 gap-y-1 px-24 py-2 md:grid-cols-2">
            {quotesExamples.map(quoteExample => <QuoteCard {...quoteExample} />)}
          </div>
      
        </>
      
      </Layout> 
    )
export default HomePage;