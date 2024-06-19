import { HTMXSwapAttribute } from '../config/types';

interface AddQuoteFormProps {
    hxPost: string,
    hxTarget: string,
    hxSwap: HTMXSwapAttribute;

}

const AddQuoteForm = ({
    hxPost,
    hxTarget,
    hxSwap
}: AddQuoteFormProps) => {
    console.log()
    
    return (<form 
        hx-post={hxPost}
        hx-target={hxTarget}
        hx-swap={hxSwap}
    
        class="w-full"> 
        <div class="mb-2 flex flex-col-reverse text-gray-400 text-opacity-90 w-1/2">
            <input type="name" name='name' id="name" class="
                bg-zinc-800 
                border 
                border-gray-300
                text-sm 
                rounded-lg 
                peer
                duration-300
                focus:border-white
                focus:text-white
                transition-all 
                block 
                w-full 
                p-2.5
                " placeholder="Marcus Avrelius" required />
            <label for="name" class="peer-focus:text-white transition-colors duration-300 block mb-2 text-sm font-medium ">Author</label>

        </div>
        <div class="mb-2 text-gray-400 text-opacity-90">
            <label for="quote" class="block  mb-2 text-sm font-medium ">Quote</label>
            <textarea cols='40' rows='6' name='quote' id="quote" class="
                w-full 
                transition-all 
                border 
                border-gray-300                 
                bg-zinc-800 
                text-sm 
                rounded-lg 
                duration-300
                focus:ring-blue-500 
                focus:border-blue-500 
                block p-2.5 " required placeholder="There is but one thing of real value..."/>
        </div>
        <button type="submit" class="text-white bg-amber-300 hover:bg-amber-400 focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
    </form>)
}

export default AddQuoteForm;