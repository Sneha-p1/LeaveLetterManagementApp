import React from 'react'

const Home = () => {
  return (
    <>
     <section className="bg-cover bg-center bg-hero text-black py-20 px-6">
        <div className="max-w-4xl mt-32 ml-40 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Takeoff Tracker</h1>
            <p className="text-slate-200 mb-8 text-white">Your ultimate leave letter management app. Simplify your leave management process with ease and efficiency.</p>
           <a href="/log-in"><button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg font-semibold inline-block">Get Started</button></a> 
        </div>
    </section>
    </>
  )
}

export default Home