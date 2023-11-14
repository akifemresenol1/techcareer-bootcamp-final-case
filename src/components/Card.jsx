import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`/details/${props.event.id}?category=${props.event.categories}`}>
      <div className="rounded-2xl border w-72 bg-[#F3E6C6]">
        <img
          className="h-72 w-full object-cover rounded-t-2xl object-top"
          src={props.event?.img_url || "https://via.placeholder.com/320x320"}
          alt="img"
        />
        <div className="py-5 px-6 ">
          <h2 className="text-lg text-center font-medium h-14">
            {props.event.name}
          </h2>

          <div className="text-sm flex items-center">
            <span className="w-10 flex items-center justify-start">
              <img src="/details/map-marker.svg" alt="map-marker" />
            </span>
            <span>{props.event.cities}</span>
          </div>
          <div className="text-sm flex items-center">
            <span className="w-10 flex items-center justify-start">
              <img src="/details/calendar.svg" alt="calendar" />
            </span>
            <span>{props.event.endDate}</span>
          </div>
          <button className="rounded-lg bg-[#E09870] px-4 py-2 active:opacity-90 text-xl w-full flex justify-between items-center">
            <span className="text-xl">
              {props.event.prices?.price1 || props.event.price}
              <span className="text-sm">.00 TL</span>
            </span>
            <img src="/details/cart.svg" alt="cart" />
          </button>
        </div>
      </div>
    </Link>
  );
}
