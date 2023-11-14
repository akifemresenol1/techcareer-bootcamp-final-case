import React from "react";
import "./detailpage.css";
import "../components/Footer";
import Footer from "../components/Footer";

import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const params = useParams();
  const { search } = useLocation();

  const [event, setEvent] = React.useState({});

  function fetchEventDetail() {
    axios
      .get(
        `https://techcareer-api2.vercel.app/api/${search
          .split("=")[1]
          .toLocaleLowerCase()}/${params.id}`
      )
      .then((response) => {
        setEvent(response.data);
      });
  }

  React.useEffect(() => {
    fetchEventDetail();
  }, []);

  return (
    <div>
      <div>Header</div>
      <div>BreadCrumb</div>
      <div content="detailContent" className="grid-container">
        <div className="item1">slider</div>
        <div className="item2 !bg-[#E09870] rounded-lg flex items-start flex-col !px-10 !py-14 gap-5">
          <div className="text-xl">{event.name}</div>
          <div className="text-base text-left bg-[#FCF2D9] py-2 px-4 rounded-lg w-full h-20">
            {event.explanation}
          </div>
        </div>
        <div className="item3">ticket</div>
        <div className="item4">location</div>
        <div className="item5">socialmedia</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DetailPage;
