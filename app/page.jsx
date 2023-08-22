import Searchbar from "@components/Marketplace/Searchbar";
import TabCard from '@components/Marketplace/TabCard';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <br></br>
      <Searchbar /> 
      <br></br>
      <TabCard />
    </section>
  );
};

export default Home;
