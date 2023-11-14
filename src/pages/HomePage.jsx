import React from "react";
import Footer from "../components/Footer";
import Events from "../components/Events";
import axios from "axios";

function HomePage() {
  const [events, setEvents] = React.useState([]);

  async function fetchEvents() {
    const { data: standup } = await axios.get(
      `https://techcareer-api2.vercel.app/api/standup`
    );
    // const { data: spor } = await axios.get(
    //   `https://techcareer-api2.vercel.app/api/spor`
    // );
    const { data: konser } = await axios.get(
      `https://techcareer-api2.vercel.app/api/konser`
    );
    setEvents([...standup, ...konser]);
  }

  React.useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <Events events={events} />
      <Footer />
    </>
  );
}

export default HomePage;
