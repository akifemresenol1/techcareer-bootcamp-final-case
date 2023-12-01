import React from 'react'

function ShareSocialMedia(props) {
  return (
    <div className='text-zinc-600 rounded-lg overflow-hidden !bg-[#F3E6C6] mt-5 mb-5 p-5'>
      <h3 className='pb-5 flex justify-start'>Etkinliği Paylaş!</h3>
      <div className='flex justify-around p-8 !bg-[#E09870] rounded-lg'>
        {/* Instagram doğrudan bir web sayfasını paylaşma özelliği sunmuyor. Sharer urli yok. */}
        {/* Facebook sharer url */}
        <a href="https://www.facebook.com/sharer/sharer.php?u=${props.link}" target="_blank">
          <i className="fa-brands fa-facebook-f fa-2xl" style={{ color: "#F3E6C6" }}></i>
        </a>
        {/* Whatsapp sharer url */}
        <a href={`https://api.whatsapp.com/send?text=Sana harika bir haberim var! ==> ${props.text} -- ${props.link}`} >
          <i className="fab fa-whatsapp fa-2xl" style={{ color: "#F3E6C6" }} ></i>
        </a>
        {/* Twitter sharer url */}
        <a href={`https://twitter.com/intent/tweet?url=${props.link}&text=${props.text}`} >
          <i className="fab fa-twitter fa-2xl" style={{ color: "#F3E6C6" }}></i>
        </a>

      </div>
    </div>
  )
}

export default ShareSocialMedia