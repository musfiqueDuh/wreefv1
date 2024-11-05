// src/pages/Home.jsx

const Home = () => {
  return (
    <section className="relative flex items-center justify-center h-screen w-screen bg-gradient-to-b from-indigo-900 to-black">
      {/* Purple Gradient Circles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 text-center max-w-xl px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Welcome to Wriff
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300 font-medium leading-relaxed">
          Your go-to creative agency for unique content, animation, and more!
        </p>
        <button className="mt-8 px-6 py-3 bg-violet-400 hover:bg-violet-800 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
