import React from "react";
import "./CitiesStyle.css";

function Cities() {
  return (
    <>
      <select placeholder="Şehir" id="şehirler" name="şehir" size={1}>
        <option>Ankara</option>
        <option>İstanbul-Avrupa</option>
        <option>İstanbul-Asya</option>
        <option>İzmir</option>
        <option>Samsun</option>
        <option>Antalya</option>
        <option>Sivas</option>
        <option>Trabzon</option>
        <option>Eskişehir</option>
        <option>Aydın</option>
      </select>
    </>
  );
}

export default Cities;
