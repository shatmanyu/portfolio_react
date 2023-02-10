import React from 'react'
import './portfolio.scss'
import '../../global.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedOption } from '../../store/portfolioSlice';
import data from '../../data.js'
import Slider from 'react-slick';
export default function Portfolio() {
  const dispatch = useDispatch();
  const optionState = useSelector((state)=>state.portfolio)
  const option = optionState.selectedOption
  const listOptions = ['Featured','WebApp','MobileApp','Design','Branding']
  const handleSelectedOption = (payload)=>{
    dispatch(setSelectedOption(payload))
  }
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='port' id='portfolio'>
      <h1> Portfolio</h1>
      <ul>
        {listOptions.map((option) =>{
          return (
            <li className={(option === optionState.selectedOption) && 'active'} onClick={() => handleSelectedOption(option)}>{option}</li>
        )})}
      </ul>
      <div className="container">
        {/* <Slider {...settings1}> */}
        {data[option]?.map((item) =>{
          return (
            <div className='item'>
              <img src={item.img} alt=''/>
              <h3>{item.title}</h3>
            </div>
        )})}
        {/* </Slider> */}
      </div>
    </div>
  )
}