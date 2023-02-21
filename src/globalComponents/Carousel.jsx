import React, { useEffect } from 'react'
import './carousel.scss'
import { useState} from 'react';
import {useSwipeable} from 'react-swipeable'
// import { useEffect } from 'react';
export const CarouselItem = ({children,width}) =>{
    return(
        <div className='carousel-item' style={{width:width}}>
            {children}
        </div>
    )
}
const Carousel = ({children,items}) =>{
    // console.log('items',items.noOfItems,items.changeIndex)
    useEffect(() =>{
        setActiveIndex(0)
    },[items?.changeIndex])
    const [activeIndex,setActiveIndex] = useState(0);
    const noOfDots = Math.ceil(React.Children.count(children)/items?.noOfItems);
    const handleIndex = (dir) =>{
        // console.log("helo")
        const hi = Math.ceil(React.Children.count(children)/items?.noOfItems);
        if(dir === 'left'){
            setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0)
        }
        else{
            setActiveIndex(activeIndex < hi - 1 ? activeIndex + 1 : hi - 1)
        }
    }
    const handlers = useSwipeable({
        onSwipedLeft: () =>{handleIndex("right")},
        onSwipedRight: () =>{handleIndex("left")}
    })
    
    return(
        <div className='tt'>
            <div className="carousel-container">
                <div><img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleIndex('left')}/></div>
                <div className="carousel" {...handlers}>
                    
                    <div className="inner" style={{transform: `translateX(-${activeIndex * (70/items?.noOfItems)}vw`}}>
                        {React.Children.map(children,(child,index) =>{
                            return (
                            React.cloneElement(child,{width:`calc(70vw/${items?.noOfItems})`})
                        )})}
                    </div>
                </div>
                <div><img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleIndex('right')}/></div>
            
            </div>
            <div className={'carousel-dots ' + (noOfDots <= 1 && 'disable-dots')}>
                {[...Array(noOfDots)].map((item,index)=>{
                    return (
                        <button className={'dot ' + (activeIndex == index && 'active-dot')} onClick={()=>setActiveIndex(index)}></button> 
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;