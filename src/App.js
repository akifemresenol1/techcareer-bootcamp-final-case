import "./App.css";
import Header from "./Header/Header";
import SearchBar from "./Filters/SearchBar";
import Cities from "./Filters/Cities";
import FromDate from "./FiltersTwo/FromDate";
import ToDAte from "./FiltersTwo/ToDAte";
import SliderBar from "./Sliderbar/SliderBar";

function App() {
  const slides = [
    {
      url: "https://techcareer-api2.vercel.app/konser-images/konser1.jpg",
      title: "photo1",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZOya2qTUtCaL-skCL6FZZFPi0l31IiWXdg&usqp=CAU",
      title: "photo2",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNADgbMZDb-Hy-CjD7kbPdeVZBCJ-oq-S1g&usqp=CAU",
      title: "photo3",
    },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    marginTop: "5%",
  };
  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="filterOne">
        <SearchBar></SearchBar>
        <Cities></Cities>
      </div>
      <div className="filterTwo">
        <FromDate></FromDate>
        <ToDAte></ToDAte>
      </div>
      <div style={containerStyles}>
        <SliderBar slides={slides}></SliderBar>
      </div>
    </>
  );
}

export default App;
