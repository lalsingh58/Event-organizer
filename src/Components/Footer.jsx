import React from 'react'

function Footer() {
  return (

    <>
      <div className='h-auto w-[100%] flex flex-col gap-4  p-2 bg-[#021526] text-lg'>
        <h1 className='text-3xl text-red-400'>About Us</h1>

        <p>Welcome to Evently, your ultimate platform for discovering and managing events effortlessly. Whether you're an organizer planning to host a memorable experience or an attendee looking for exciting local activities, we've got you covered.
        Our mission is to connect people through meaningful events, empowering organizers to showcase their creativity and attendees to explore and participate with ease. From concerts and conferences to sports and community gatherings, we help make every event a success.
        </p>

        
        <p>
        Join us today and experience the joy of seamless event discovery and management!</p>

      
    </div>

    <div className='h-auto w-[100%] flex flex-col gap-4 pl-4 p-2 bg-[#021526] text-lg'>

        <h1 className='text-3xl text-red-400'>Contact Us</h1>
        <p>
          <h3>📧 Email Us</h3>
          <p>Email: redevent58.ac.in</p>
        </p>

        <p>
          <h3>📞 Call Us</h3>
          <p>Phone: +91 1234567890</p>
        </p>

        <h3>📍Visit Us</h3>
        <p>
          99 Linghi Chetty Street,
          <br />
          Chennai, TamilNadu, 600001.
        </p>

        <p className='text-center'>@<span className='text-pink-400'>2024</span> Red Events. All rights reserved</p>
    </div>

    </>

    

  )
}

export default Footer