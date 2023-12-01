import React, { useState, useEffect, useRef } from 'react';
import "../data/standup";
import { standupData } from '../data/standup';


function LocationCard() {

    const [coordinate, setcoordinate] = useState({ lat: null, lng: null });
    const selectedData = standupData.find(item => item.id === 1)
    const zoom = 15;


    useEffect(() => {
        //şimdilik id'si 1 olan data kullanıldı. Koordinat bilgileri içindeki indexi 0 olan data lat, 1 olan data ise lng değişkenine atanadı.

        if (selectedData) {
            const [lat, lng] = selectedData.coordinate;
            setcoordinate({ lat, lng });
        }

    }, []);


    return (
        <div className='text-zinc-600 rounded-lg'>
            <div className='bg-amber-500 p-4'>
                <div className='flex pl-3'>
                    <p>Konum Bilgisi: {selectedData.cities}</p>
                </div>
                <div className='flex pl-3'>
                    <p>
                        <i className="fa-solid fa-location-dot pr-1 text-zinc-600"></i>
                        Açık Adres Bilgisi: {selectedData.livingRoom}</p>
                </div>
            </div>
            <div>
                <iframe className=''
                    src={`https://maps.google.com/maps?q=${coordinate.lat},${coordinate.lng}&z=${zoom}&output=embed`}
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="google map"
                ></iframe>
            </div>


        </div>
    )
}

export default LocationCard