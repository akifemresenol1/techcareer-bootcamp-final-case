import React from "react";
import { events } from "../data/events";
import Card from "./Card";

// TODO: api hazır oldugunda events yerine api'den gelen verileri kullan

export default function Events() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-16">
        Yakın Zamanda Gerçekleşecek Etkinlikler
      </h1>
      <div className="flex gap-20 flex-wrap">
        {events.map((event) => {
          return <Card key={event.name} event={event} />;
        })}
      </div>
    </>
  );
}
