import { useState } from 'react'
import './App.css'

function App() {
  const [position, setPosition] = useState(0)
  const carouselData = [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
  ]

  const nextSlide = () => {

    setPosition(next => {
      return next === carouselData.length-1 ? 0: next + 1
    })
  }

  const prevSlide = () => {
     setPosition(prev => {
      return prev === 0 ? carouselData.length- 1: prev- 1
  })
  }

  return (
    <div className='container'>
    <div className='arrow arrow-left' onClick={prevSlide}>{'<'}</div>
    {carouselData && carouselData.map((data, indx) => {
      return(
          <img key={indx} src={data.src} alt={data.alt} className={ position === indx ? 'slides': 'slides-hidden' }/>
      )
    })
  }
  <div className='arrow arrow-right' onClick={nextSlide}>{'>'}</div>
    </div>
  )
}

export default App
