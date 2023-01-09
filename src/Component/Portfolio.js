import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow py-6">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">
              My Portfolio
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="px-4 py-2 font-bold text-gray-800 rounded-full hover:bg-gray-200"
              >
                Home
              </a>
              <a
                href="#"
                className="px-4 py-2 font-bold text-gray-800 rounded-full hover:bg-gray-200"
              >
                About
              </a>
              <a
                href="#"
                className="px-4 py-2 font-bold text-gray-800 rounded-full hover:bg-gray-200"
              >
                Services
              </a>
              <a
                href="#"
                className="px-4 py-2 font-bold text-gray-800 rounded-full hover:bg-gray-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="container mx-auto px-6 md:px-0 mt-16">
        <div className="flex flex-col md:flex-row space-y-16 md:space-y-0">
          <div className="w-full md:w-1/2 space-y-8 md:space-y-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hi, I'm John Doe
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              I'm a web developer specializing in building modern and
              responsive websites.
            </p>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600">
              Contact Me
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/image.jpg" alt="John Doe" className="rounded-lg" />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 md:px-0 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipis
</p>
</div>
</section>




<section className="container mx-auto px-6 md:px-0 mt-16 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            at ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:-mx-3">
          <div className="flex-1 px-3">
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Web Design
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
          <div className="flex-1 px-3">
          <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                SEO Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Contact Me
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
              <form className="w-full max-w-xs mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block w-full bg-white rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full bg-white rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="grid-last-name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <input
                      className="appearance-none block w-full bg-white rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="grid-email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">

                <div className="w-full px-3">
                    <textarea
                      className="appearance-none block w-full bg-white rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="grid-message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right mt-8 md:mt-0">
              <img src="/image.jpg" alt="John Doe" className="rounded-full" />
              <h2 className="text-xl font-bold text-gray-800 mt-4">
                John Doe
              </h2>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-gray-600 text-sm font-semibold tracking-wide uppercase">
                Copyright &copy; {new Date().getFullYear()} My Portfolio
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
    
