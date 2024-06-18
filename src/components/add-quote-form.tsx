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
}: AddQuoteFormProps) => (
    <form 
        hx-post={hxPost}
        hx-target={hxTarget}
        hx-swap={hxSwap}
    
        class="w-3/4"> 
        <div class="mb-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="name" name='name' id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Marcus Avrelius" required />
        </div>
        <div class="mb-2">
            <label for="quote" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quote</label>
            <textarea name='quote' id="quote" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="There is but one thing of real value..."/>
        </div>
        <button type="submit" class="text-white bg-amber-300 hover:bg-amber-400 focus:ring-1 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
    </form>
)

export default AddQuoteForm;