const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* attendance Project */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Smart Attendance Tracking System
            </h1>
              A Smart Attendance Tracking System powered by AI-based face recognition.
              Built with React Native and Node.js, this app automates attendance management,
              improves accuracy, and provides real-time analytics for students and employees.
            <p className="text-lg text-gray-700 mb-4">
             
          
            </p>
            <a
              href="https://facemark-mu3z.onrender.com"
              className="text-[#fe5617] font-bold text-lg hover:underline" target="blank" >
              Live Demo
            </a>
          </div>

          {/* Goalwallet */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Goal Wallet
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A smart personal finance platform that optimizes users’ 
              savings and expenses using AI-driven insights.
              Developed with React.js, GoalWallet helps users achieve their financial goals by 
              tracking spending, suggesting budgets, and automating savings with intelligent recommendations.
            </p>
            <a
              href="" target="blank"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-col gap-10">
          {/* gardenify */}
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Gardenify
            </h1>
            <p className="text-lg text-gray-700 mb-4">
            Gardenify is a social platform for plant lovers — share your gardening journey, connect with fellow growers, discover plant-care tips, and grow together in a vibrant community.
            </p>
            <a
              href="https://gardenify7.netlify.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline" target="blank"
            >
              Live Demo
            </a>
          </div>

         
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* recipe */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              RecipeShare
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             A community-driven platform where users can add and share their favorite recipes with ingredients, cooking steps, and images. The platform is built using the MERN stack, with Cloudinary for recipe image storage. Users can browse, search, and filter recipes by categories such as Vegetarian, Non-Vegetarian, and Desserts, making it easy to discover and share new dishes.
            </p>
            <a
              href="https://newrecipe1.netlify.app/" target="blank"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Cinelist*/}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Cinelist
            </h1>
            <p className="text-lg text-gray-700 mb-4">
             A personal movie tracking app where users can add movies they want to watch, mark them as “watched,” and organize their watchlist. Built using React.js with the TMDb API for fetching movie details, posters, and ratings. The app lets users search for movies, view detailed information, and manage their watchlist easily.
            </p>
            <a
              href="https://cinelist7.netlify.app/" target="_blank"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              React Weather Pro
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A weather app that shows current weather based on the city
              searched. Built with React.js, utilizing OpenWeatherMap API to
              fetch real-time weather data.
            </p>
            <a
              href="https://weatherfixpro.netlify.app/" target="blank"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div>

          {/* Landing Pages Bundle */}
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              href="https://github.com/AMOHAMMEDIMRAN/Amazing-Landing-Page"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline" target="blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
