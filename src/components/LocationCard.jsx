import React, { useState, useEffect, useRef } from 'react';


function LocationCard(props) {

    const [coordinate, setcoordinate] = useState({ lat: null, lng: null });
    const zoom = 15;


    useEffect(() => {
        //şimdilik id'si 1 olan data kullanıldı. Koordinat bilgileri içindeki indexi 0 olan data lat, 1 olan data ise lng değişkenine atanadı.

        if (props) {
            const [lat, lng] = props.coordinate;
            setcoordinate({ lat, lng });
        }

    }, []);


    return (
        <div className='text-zinc-600 rounded-lg overflow-hidden'>
            <div className='!bg-[#E09870] p-5'>
                <div className='flex pl-3 pb-2'>
                    <p>Konum Bilgisi: {props.cities}</p>
                </div>
                <div className='flex pl-3'>
                    <p>
                        <i className="fa-solid fa-location-dot pr-1 " style={{color: "#F3E6C6"}}></i>
                        Açık Adres Bilgisi: {props.livingRoom}</p>
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