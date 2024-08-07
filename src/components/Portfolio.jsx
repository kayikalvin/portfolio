import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

const Portfolio = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b to-cyan-950 from-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Portfolio</p>

            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi amet pariatur enim nam deleniti! Illum quam expedita alias repudiandae hic magni minima, laboriosam est tempore, maiores iusto dolor non qui tempora odit quasi eius? Rerum iste perferendis provident minima similique nulla qui, voluptatibus est delectus soluta ad aperiam! Dolorem.</p>
            <br />
            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel fugiat voluptatem velit. Suscipit sapiente sequi animi repellat velit deleniti cumque ducimus voluptatum magni quisquam debitis soluta nesciunt aliquid architecto delectus nihil asperiores quam tempora natus impedit, dolore aspernatur. A at unde dolorem quaerat quidem, architecto facilis pariatur labore iste?</p>
        </div>
    </div>
  )
}

export default Portfolio