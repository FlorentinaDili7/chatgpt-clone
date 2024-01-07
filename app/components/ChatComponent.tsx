import React from 'react';

const ChatComponent = () => {
    return (
        <div>
            <div className="">
                <h3 className=''>Your AI assistant</h3>
                <p>response</p>
            </div>
            <div className="">
                <form action="" className="flex flex-col space-y-4">
                    <label htmlFor="userMessage" className="text-xl font-bold">
                        User Message
                    </label>
                    <textarea
                        id="userMessage"
                        name="userMessage"
                        className="border p-3 rounded-md focus:outline-none focus:border-blue-300 bg-gray-100"
                        placeholder="Write your question here..."
                    />
                    <button
                        type="submit"
                        className="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors duration-300 focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatComponent;
