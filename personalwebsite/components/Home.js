import React from 'react'
import salah from '../public/images/salah.png'
import TextAnimation from '../aniamations/textAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { socialData } from '../data/socialData'


function Home() {
  return (
    <div className='flex flex-col-reverse md:flex-row pt:20 md:pt-40 font-primaryFont   items-center justify-around text-textColor   md:pl-60 '>
        <div className='md:w-screen w-11/12 pl-3 md:pl-0'> 
          <p className='text-sm md:text-lg   pb-5 tracking-small'> Welcome To My Website</p>
          <h1 className=' text-3xl md:text-5xl pb-10 tracking-small '>Hi I'm <strong className=' text-secondery select-none'> SALAH</strong></h1>
          
           <div className='absolute text-xs md:sm  tracking-small'>
           <TextAnimation/>
           </div >
           <p className='pt-10 text-sm md:text-base md:w-8/12 w-11/12 select-none tracking-small'>Ea quam officiis est corporis consequatur ea aperiam excepturi ad amet sapiente qui dolor expedita id sunt tenetur sit unde galisum. In sequi reiciendis aut magnam adipisci eum nihil eveniet ut consequatur veniam vel illo quis id autem dolor id culpa mollitia.</p>
            <div className=' pt-10 text-xs md:text-sm tracking-small'>
            <p > Find with me</p>
              <div className='flex justify-around w-1/3 pt-3 md:w-20 pb-14 md:pb-0 gap-3  '>
              {socialData.map((data) => (
                <div key={data.id}>  
                      <FontAwesomeIcon className={data.class} icon={data.icons} size={data.size} style={{color:'#ba1168', }} />
                </div>              
              ))}
              
              </div>
            </div>
        </div>
        <div className='items-center md:pl-0 pl-20 pt-40  h-scree w-screen md:w-9/12 md:pb-10 '>
         <img src={salah} alt='salah' className='   w-9/12 md:w-96 md:h-96 h-3/4'/>
        </div>
    </div>
  )
}

export default Home