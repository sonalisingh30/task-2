import "./index.css";
import userpic from "/assets/user_pic.svg";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen p-6 sm:p-6 bg-custom-blue">
        <div className="bg-blue-900 text-white flex flex-col items-center rounded-lg p-4 sm:p-6 shadow-lg max-w-md w-full sm:flex-row sm:items-center">
          <img
            src={userpic}
            alt="userpic"
            className="w-16 h-16 mr-4 sm:mr-6  rounded-full mb-4 sm:mb-0"
          />

          <span className="h-0.5 bg-yellow-400 w-16 sm:w-0.5 sm:h-16 my-1.5  block"></span>
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold mb-2 ml-4 "> I'm John</h1>
            <p className="text-gray-100 ml-4">Front End Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
