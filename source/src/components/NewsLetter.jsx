import { useState } from "react";

export default function NewsLetter() {

    const [responseMessage, setResponseMessage] = useState("");

    async function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const response = await fetch("api/newsletter", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            setResponseMessage(data.message);
        }
    }

    return (
      <div class="bg-zinc-900 rounded-xl mt-10 flex flex-col md:flex-row md:justify-center md:items-center">
        <h1 class="text-md text-center mt-4 md:mt-0 px-2 md:px-0 md:text-xs font-medium text-zinc-900 dark:text-white sm:text-xl md:mb-0 md:mr-10">FREE Courses and E-books: <span class="font-light">Never Miss a Piece</span></h1>
          <form onSubmit={submit} class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 p-3 mt-4 mb-4 md:mt-20 md:mb-16 sm:mx-auto sm:flex sm:max-w-lg lg:mx-0">
            <input class="block w-full px-5 py-3 outline-none border rounded shadow-sm text-gray-300 border-[#3c3c3c] bg-[#121212] focus:border-white focus:ring-1 focus:ring-white" type="email" id="email" name="email" placeholder="Your e-mail" required />
            <button class="inline-block rounded border border-indigo-600 dark:border-indigo-400 dark:hover:border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 dark:text-indigo-400 dark:hover:text-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 transition-all">Subscribe</button>
          </form>
      </div>
              
      );
}