import React from 'react'

function Register() {
  return (
    <div className=" flex items-center justify-center py-12 px-6">
  <div className="bg-[#021526] text-white p-10 max-w-lg w-full">
    <img src="your-image-url-here.jpg" alt="Redevents logo" className="mb-12" />

    <form action="" method="">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-300">Register now</h2>
        <p className="text-gray-600 mt-3 text-lg">
        </p>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-1/2">
          <label htmlFor="firstname" className="block text-sm text-gray-600 mb-2">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastname" className="block text-sm text-gray-600 mb-2">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-1/2">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="address" className="block text-sm text-gray-600 mb-2">Street Address</label>
        <input
          type="text"
          name="address"
          id="address"
          className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="address2" className="block text-sm text-gray-600 mb-2">Street Address Line 2</label>
        <input
          type="text"
          name="address2"
          id="address2"
          className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
        />
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-1/2">
          <label htmlFor="state" className="block text-sm text-gray-600 mb-2">State/Province</label>
          <input
            type="text"
            name="state"
            id="state"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="country" className="block text-sm text-gray-600 mb-2">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-1/2">
          <label htmlFor="post" className="block text-sm text-gray-600 mb-2">Post/Zip code</label>
          <input
            type="text"
            name="post"
            id="post"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="area" className="block text-sm text-gray-600 mb-2">Area Code</label>
          <input
            type="text"
            name="area"
            id="area"
            className="w-full px-6 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          />
        </div>
      </div>

      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="supportCheckbox"
          className="form-checkbox text-indigo-600"
        />
        <label htmlFor="supportCheckbox" className="ml-2 text-sm text-gray-600">
          I agree to the defined <a href="#" className="text-indigo-600">terms, conditions, and policies</a>
        </label>
      </div>

      <button className="w-full py-3 px-6 text-white font-semibold bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
        Register Now
      </button>
    </form>
  </div>
</div>

  )
}

export default Register