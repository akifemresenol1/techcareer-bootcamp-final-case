import React from "react";
import Card from "./Card";

export default function Events(props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-16">
        Yakın Zamanda Gerçekleşecek Etkinlikler
      </h1>
      <div className="flex gap-20 flex-wrap">
        {props.events.map((event) => {
          return <Card key={event.name} event={event} />;
        })}
      </div>
    </>
  );
}
