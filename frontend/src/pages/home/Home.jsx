import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    // <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    // <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden">
    //   <Sidebar />
    //   <MessageContainer />
    // </div>
    <div className="flex flex-col sm:flex-row sm:h-auto md:h-[550px] rounded-lg overflow-hidden">
      <Sidebar className="w-full sm:w-[200px] md:w-[250px]" />
      <MessageContainer className="w-full sm:flex-1 md:w-[calc(100%-250px)]" />
    </div>
  );
};

export default Home;
