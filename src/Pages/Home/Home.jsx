
import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Bannar from "../../components/Header/Bannar/Bannar";
import { useState } from "react";

const Home = () => {
      const cards = useLoaderData();
      const [searchItem, setSearchItem] = useState("");

      return (
            <div>
                  <Bannar setSearchItem={setSearchItem}></Bannar>
                  <Cards cards={cards} searchItem={searchItem}></Cards>
            </div>
      );
};

export default Home;