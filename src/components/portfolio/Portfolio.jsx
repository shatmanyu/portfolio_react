import React, { useState,useEffect } from 'react'
import './portfolio.scss'
import Carousel,{CarouselItem} from '../../globalComponents/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../../store/portfolioSlice';
import data from '../../data.js'
export default function Portfolio() {
  const dispatch = useDispatch();
  const optionState = useSelector((state)=>state.portfolio)
  const listOptions = ['Featured','WebApp','MobileApp','Design','Branding']
  const [itemsToShow,setItemsToShow] = useState(3)
  const [currentWidth,changeWidth] = useState(window.innerWidth)
  const handleSelectedOption = (payload)=>{
    dispatch(setSelectedOption(payload))
  }
  const setWidth = () =>{
    changeWidth(window.innerWidth)
    if (currentWidth < 768){
      setItemsToShow(1)
    }
    else{
      setItemsToShow(3)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',setWidth)
    return () =>{
      window.removeEventListener('resize',setWidth)
    }
  })
  return (
    <div className='port' id='portfolio'>
      <h1> Portfolio</h1>
      <div className='lower-section'>
      <ul>
        {listOptions.map((option) =>{
          return (
            <li className={(option === optionState.selectedOption) && 'active'} onClick={() => handleSelectedOption(option)}>{option}</li>
        )})}
      </ul>
      <div className="container">
        <Carousel items={{noOfItems:itemsToShow,changeIndex: optionState.selectedOption}}>
        {data[optionState.selectedOption]?.map((item) =>{
          return (
            <CarouselItem>
            <div className='item'>
              <img src={item.img} alt=''/>
              <h3>{item.title}</h3>
            </div>
            </CarouselItem>
        )})}
        </Carousel>
      </div>
      </div>
    </div>
  )
}