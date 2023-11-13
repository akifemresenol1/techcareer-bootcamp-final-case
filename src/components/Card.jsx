import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="rounded-2xl border w-96 bg-[#F3E6C6]">
        <img
          className="h-64 w-96 object-contain rounded-t-2xl"
          src={props.event?.img_url || "https://via.placeholder.com/320x320"}
          alt="img"
        />
        <div className="py-5 px-8">
          <h2 className="text-2xl text-center">{props.event.name}</h2>
          <div className="text-xl flex">
            <img src="/details/map-marker.svg" alt="map-marker" />
            <span>{props.event.cities}</span>
          </div>
          <div className="text-xl flex">
            <img src="/details/calendar.svg" alt="calendar" />
            <span>{props.event.endDate}</span>
          </div>
          <button className="rounded-lg bg-[#E09870] px-2 py-1 active:opacity-90 text-xl w-full flex justify-between">
            <span>
              Minimum Fiyat: {props.event.prices?.price1 || props.event.price}
            </span>
            <img src="/details/cart.svg" alt="cart" />
          </button>
        </div>
      </div>
    </>
  );
}
