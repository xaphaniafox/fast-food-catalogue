import { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    if (fastFoodItems.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلیدواژه فوق، هیچ آیتمی یافت نشد
          </div>
          <img
            className="mx-auto mt-5 d-block"
            src={notFound}
            alt="Not found fast food"
          />
        </>
      );
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  return (
    <>
      <div className="wrapper bg-faded-dark">
        <Header />
        {/* <CategoryList filterItems={filterItems} /> */}
        <CategoryList filterItems={filterItems}>
          <SearchBar searchItems={searchItems} />
        </CategoryList>
        <div className="container mt-4">{renderContent()}</div>
      </div>
    </>
  );
}

export default App;
