import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Event from '../Components/Event'


function Events() {

  const eventList = [
    { id: 1, name: "Live Music Concert", image: "https://img.freepik.com/premium-photo/minsk-29-april-2018-popular-rock-group-nuteki-stage_202443-707.jpg?w=900" },
    { id: 2, name: "Tech Conference 2024", image: "https://img.freepik.com/premium-photo/professionals-gather-around-conference-table-discuss-future-plans_875722-8919.jpg?w=900" },
    { id: 3, name: "Yoga Workshop", image: "https://images.pexels.com/photos/5890302/pexels-photo-5890302.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 4, name: "Food Festival", image: "https://img.freepik.com/free-photo/medium-shot-people-celebrating-tamil-new-year_23-2151210765.jpg?t=st=1734263907~exp=1734267507~hmac=8df499bb841ff9df56eb7717910bf4abce930b247cd20188b2e072a08b95340b&w=900" },
    { id: 5, name: "Charity Run", image:   "https://img.freepik.com/premium-photo/friendly-volunteers-handing-out-free-food-hungry-poor-needy-individuals-outdoors-underprivileged-homeless-people-receiving-warm-meals-from-humanitarian-aid-team-food-drive_482257-68641.jpg?w=900" },
    { id: 6, name: "Art Exhibition", image:"https://images.pexels.com/photos/1671014/pexels-photo-1671014.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 7, name: "Film Screening", image: "/images/film.jpg" },
    { id: 8, name: "Tech Startup Meetup", image: "/images/startupmeetup.jpg" },
    { id: 9, name: "Health and Wellness Fair", image: "/images/healthfair.jpg" },
    { id: 10, name: "Photography Workshop", image: "/images/photoworkshop.jpg" },
    { id: 11, name: "Dance Performance", image: "/images/danceperformance.jpg" },
    { id: 12, name: "Food and Drink Tasting", image: "/images/foodtasting.jpg" },
    { id: 13, name: "Book Launch Event", image: "/images/booklaunch.jpg" },
    { id: 14, name: "Fashion Show", image: "/images/fashionshow.jpg" },
    { id: 15, name: "Music Festival", image: "/images/musicfestival.jpg" },
    { id: 16, name: "DIY Craft Workshop", image: "/images/diyworkshop.jpg" },
    { id: 17, name: "Science Fair", image: "/images/sciencefair.jpg" },
    { id: 18, name: "Poetry Reading", image: "/images/poetryreading.jpg" },
  ];
  
  
  return (
    
    <div>
      <Navbar />

      <div>
        <div className='flex flex-wrap gap-4'>
          {eventList.map((e) => {
           return (  
             <Event
               key={e.id} 
               Eventname={ e.name}
               Eventimg={e.image} 
             />
           );
          })}
        </div>
      </div>
  
      <Footer />    
    </div>
  )
}

export default Events