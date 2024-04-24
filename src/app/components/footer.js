// components/Footer.js
const Footer = () => {
    return (
        <footer className="bg-white">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <Link href="#">
                <button className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                  {/*Icon from: http://www.potlabicons.com/ */}
                  <img src="../pencil.jpg" className="h-8 fill-current inline" style={{ height: '50px', width: '50px' }} />
                  Pencil AI
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="#">
                    <button className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</button>
                  </Link>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <Link href="#">
                    <button className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Social</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button href="https://t.me/pencilai" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Telegram</button>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <button href="https://twitter.com/pencilai" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  