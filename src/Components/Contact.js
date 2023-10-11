const Contact = () => {
    return (
        <div className="w-72 mx-auto">
            <h1>This is Contact page</h1>

            <div>
                <label
                    htmlFor="Name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Name :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm  mx-auto">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">

                    </div>
                    <input
                        type="text"
                        name="name"
                        id="Name"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your name"
                    />

                </div>
                <label
                    htmlFor="Message"
                    className="block text-sm font-medium leading-6 text-gray-900 my-8"
                >
                    Message :
                </label>

                <div className="relative mt-2    mx-auto">
                    <textarea id="Message" name="message" rows="4" cols="50" className="border-black rounded-md" defaultValue="write here">
                       
                    </textarea>


                </div>


               <button className="p-3 bg-cyan-500 rounded-sm mx-auto font-bold" >Submit</button>

            </div>
        </div>
    );
};
export default Contact;
