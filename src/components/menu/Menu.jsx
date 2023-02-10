import React from 'react'
import './menu.scss'
import '../../global.scss'
import { useDispatch,useSelector } from 'react-redux';
import { setMenuOpen } from '../../store/topbarSlice';
export default function Menu() {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.topbar);
  const options = ['intro','portfolio','works','testimonials','contact']
  const handleMenuClose = () =>{
    dispatch(setMenuOpen())
  }
  return (
    <div className={'menu ' + (menuState.menuOpen && 'active')}>
      <ul>
            {options.map((option) =>{
                return(
                    <li className='list-option' onClick={handleMenuClose}>
                        <a href={"#"+option}>{option}</a>
                    </li>
            )})}
      </ul>

    </div>
  )
}
