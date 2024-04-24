import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header id="header" className="fixed w-full z-30 top-0 text-white bg-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link href="/">
              <button className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                {/*Icon from: http://www.potlabicons.com/ */}
                <img src="../pencil.jpg" className="h-8 fill-current inline" style={{ height: '50px', width: '50px' }} />
                Pencil AI
              </button>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link href="#">
                  <button className="inline-block py-2 px-4 text-black font-bold no-underline">Buy PAI</button>
                </Link>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="https://pencil-ai.gitbook.io/pencilai-lite-paper/">Read our litepaper</a>
              </li>
            </ul>
            <button id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <Link href="https://t.me/+E-SXVdadAAgzNzg0" target="_blank">
                <button>Join Telegram Group</button>
              </Link>
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </header>
      
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Col */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="leading-normal text-2xl mb-8">🚀 Welcome to the Future of Productivity with Pencil AI! 🌟</h1>
            <p className="leading-normal text-2xl mb-8">
              Embark on a journey of innovation and empowerment with Pencil AI, where cutting-edge technology meets limitless possibilities. Our platform revolutionizes the way you work, learn, and interact, offering AI-powered solutions tailored to your needs. With Pencil AI, you'll experience unparalleled efficiency, insight, and convenience like never before.
            </p>
            <p className="leading-normal text-2xl mb-8">Join our vibrant community of forward-thinkers, explorers, and visionaries, and discover the boundless potential of our ecosystem. Whether you're a crypto enthusiast, a productivity aficionado, or a tech-savvy individual seeking the next big thing, Pencil AI welcomes you with open arms.</p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <Link href="https://t.me/+E-SXVdadAAgzNzg0" target="_blank">
                <button>Join PencilAI Community</button>
              </Link>
            </button>
          </div>
          {/* Right Col */}
          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" />
          </div>
        </div>
      </div>

      {/* Other sections go here */}

      {/* Footer */}
      
    </>
  );
}
