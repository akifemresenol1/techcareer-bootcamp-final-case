import React from "react";
import Card from "./Card";

export default function Events(props) {
  return (
    <>
      <h1 className="text-3xl text-gray-900 font-medium text-center mb-16">
        Etkinlikler
      </h1>
      <div className="flex gap-20 flex-wrap">
        {props.events.map((event) => {
          return <Card key={event.name} event={event} />;
        })}
      </div>
    </>
  );
}
