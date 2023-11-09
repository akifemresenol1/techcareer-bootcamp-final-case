import React from 'react';
import { CATEGORY, SOCIALMEDIA, CONTACT } from './FooterMenu';

function Footer() {
    return (
        <div className='bg-zinc-400 text-zinc-600 pt-8 pb-2 '>
            <div className='grid-cols-4 grid gap-10'>
                <div id='logo' className='flex items-center justify-center border-r-2 border-zinc-600'>
                    <img src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" alt="" />

                </div>
                <div id='categoreis'>
                    <h6 className='font-bold'>Kategoriler</h6>
                    <ul className='text-sm'>
                        {CATEGORY.map((item) => (
                            <li><a href={item.link}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div id='socialMedia'>
                    <h6 className='font-bold'>Bizi Takip Edin</h6>
                    <ul className='text-sm'>
                        {SOCIALMEDIA.map((item) => (
                            <li className='hover:text-blue-600'><a href={item.link}><i className={item.icon + ' text-zinc-600 text-[12px] mr-1'} /> {item.name}</a></li>
                        ))}
                    </ul>
                </div>

                <div id='contact'>
                    <h6 className='font-bold'>İletişim</h6>
                    <ul className='text-sm'>
                        {CONTACT.map((item) => (
                            <li> <a href={item.link}><i className={item.icon + ' text-zinc-600 text-[12px] mr-1'} /> {item.info}</a></li>
                        ))}
                    </ul>
                </div>


            </div>
            <div className="grid grid-cols-1 gap-10 text-xs text-center pt-2 pb-2 pt-4 ">
                <span>techcareer-bootcamp-final-case © Tüm Hakları Saklıdır.</span>
            </div>

        </div>
    )
}

export default Footer