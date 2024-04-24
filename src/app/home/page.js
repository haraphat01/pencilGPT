import Link from 'next/link';

export default function HomePage() {
    return (
        <>


            <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <h1 className="leading-normal text-2xl md:text-4xl mb-4 md:mb-8">🚀 Welcome to the Future of Productivity with Pencil AI! 🌟</h1>
                    <p className="leading-normal text-lg md:text-2xl mb-4 md:mb-8">
                        Embark on a journey of innovation and empowerment with Pencil AI, where cutting-edge technology meets limitless possibilities. Our platform revolutionizes the way you work, learn, and interact, offering AI-powered solutions tailored to your needs. With Pencil AI, you'll experience unparalleled efficiency, insight, and convenience like never before.
                    </p>
                    <p className="leading-normal text-lg md:text-2xl mb-4 md:mb-8">Join our vibrant community of forward-thinkers, explorers, and visionaries, and discover the boundless potential of our ecosystem. Whether you're a crypto enthusiast, a productivity aficionado, or a tech-savvy individual seeking the next big thing, Pencil AI welcomes you with open arms.</p>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <Link href="https://t.me/+E-SXVdadAAgzNzg0" target="_blank">
                            Join PencilAI Community
                        </Link>
                    </button>
                </div>


                <div className="w-full md:w-3/5 py-6 text-center">
                    <img className="w-full md:w-4/5 z-50" src="hero.png" />
                </div>
            </div>


            {/* Other sections go here */}
            <section className="bg-white border-b py-8">
                <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                        Products
                    </h2>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>

                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <Link href="#" className="flex flex-wrap no-underline hover:no-underline">

                                <div className="w-full font-bold text-xl text-gray-800 px-6 text-center pt-4 pb-4">
                                    <p>PencilChat</p>
                                    <p> Your AI Assistant</p>
                                </div>

                                <p className="text-gray-800 text-base px-6 mb-5">
                                    Looking for an intelligent and reliable AI assistant? Look no further than PencilChat. Our language model
                                    bot
                                    is your go-to solution for any query, from business and finance to health and wellness. With PencilChat,
                                    you
                                    have access to a smart, responsive, and always-on virtual assistant. You can also seamlessly integrate
                                    into your
                                    group chats. It offers instant AI-powered assistance tailored to your group's discussions. Just mention
                                    the
                                    bot's name at the end of your query.
                                </p>

                            </Link>
                        </div>



                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <Link href="https://t.me/TajiriBot" target="_blank">
                                        <button>Try the bot</button>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">


                            <div className="w-full font-bold text-xl text-gray-800 px-6 text-center pt-4 pb-4">
                                <p>PencilResearch</p>
                                <p> 📝 Quick Market Research Assistant! 🎙️</p>
                            </div>

                            <p className="text-gray-800 text-base px-6 mb-5">
                                PencilResearch is your all-in-one platform for comprehensive cryptocurrency analysis. From in-depth fundamental research to real-time sentiment tracking, PencilResearch equips traders and investors with the insights they need to make informed decisions in the dynamic world of digital assets.🚀
                            </p>


                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <Link href="/research" className="flex flex-wrap no-underline hover:no-underline">
                                    <button
                                        className="mx-auto lg:mx-0 hover:underline gradient  font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Try it here
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <Link href="/" className="flex flex-wrap no-underline hover:no-underline">

                                <div className="w-full font-bold text-xl text-gray-800 px-6 text-center pt-4 pb-4">
                                    <p>PencilGPT</p>
                                    <p> AI Search Engine for Crypto Data</p>
                                </div>


                                <p class="text-gray-800 text-base px-6 mb-5">
                                    PencilGPT is a revolutionary AI-powered web platform designed to streamline your crypto research
                                    experience. With its intuitive natural language interface, PencilGPT allows users to effortlessly query
                                    any crypto-related data in plain language. Whether you're seeking price updates, market trends, or
                                    project
                                    details, PencilGPT provides comprehensive and accurate information at your fingertips. It can also be
                                    used
                                    to streamlined your investment decision with the power of trained model on financial data.
                                </p>

                            </Link>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg:mx-0 hover:underline gradient  font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Coming soon
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <Link href="#" className="flex flex-wrap no-underline hover:no-underline">

                                <div className="w-full font-bold text-xl text-gray-800 px-6 text-center pt-4 pb-4">
                                    <p>PencilVoice</p>
                                    <p> Transforming Audio to Text with Ease! 🎙️📝</p>
                                </div>

                                <p className="text-gray-800 text-base px-6 mb-5">
                                    PencilVoice is your go-to bot for effortlessly converting audio files into text format. Whether it's
                                    recorded lectures, interviews, or voice notes, PencilVoice provides accurate transcriptions in seconds,
                                    saving you time and effort. Simply upload your audio file, sit back, and let PencilVoice do the rest!
                                    Experience the convenience of seamless audio-to-text conversion with PencilVoice today. Try it now and
                                    elevate your productivity to new heights! #PencilVoice #AudioToText 🚀
                                </p>

                            </Link>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                            <div className="flex items-center justify-center">
                                <button
                                    className="mx-auto lg:mx-0 hover:underline gradient  font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
