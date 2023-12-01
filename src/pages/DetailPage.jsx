import React from "react";
import "./detailpage.css";
import "../components/Footer";
import Footer from "../components/Footer";

import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import LocationCard from "../components/LocationCard";
import ShareSocialMedia from "../components/ShareSocialMedia";

function DetailPage() {
  const params = useParams();
  const { search } = useLocation();

  const [event, setEvent] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  function fetchEventDetail() {
    axios
      .get(
        `https://techcareer-api2.vercel.app/api/${search
          .split("=")[1]
          .toLocaleLowerCase()}/${params.id}`
      )
      .then((response) => {
        setEvent(response.data);
        setLoading(false)
      });
  }

  React.useEffect(() => {
    fetchEventDetail();
  }, []);

  const href=window.location.href

  // Eğer backend üzerinden cevap bekleniyorsa loading screen gösterilir.
  // Backend üzerinden cevap geldiğinde loading false olur ve detay sayfası gösterilir.
  if (loading)

    return (
      <span>loading</span>
    )
  else
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
          <div className="item4">
            < LocationCard coordinate={event.coordinate} cities={event.cities} livingRoom={event.livingRoom} />
          </div>
          <div className="item5">
            <ShareSocialMedia link={href} text={event.name} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
}

export default DetailPage;
