import { Typography } from "@mui/material";
import CocktailList from "../components/CocktailList";
import SearchInput from "../components/SearchInput";

const Home = () => {
  return (
    <>
      <SearchInput />
      <CocktailList />
    </>
  );
};

export default Home;
