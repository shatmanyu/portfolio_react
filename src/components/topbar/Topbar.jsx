import React from 'react'
import './topbar.scss'
import '../../global.scss'
import {Person,Mail} from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOpen } from '../../store/topbarSlice';
export default function Topbar() {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.topbar);
    const handleToggle = () => {
        // console.log("clicked")
        dispatch(setMenuOpen());
  }
//   console.log("re",menuState)
  return (
    <div className={'top ' + (menuState.menuOpen?'active':'')} id='top'>
        <div className='wrapper'>
            <div className='left'>
                <a href='#contact' className='logo'>shattu</a>
                <div className='item-container'>
                    <Person className='icon'/>
                    <span>+91 9999999999</span>
                </div>
                <div className='item-container'>
                    <Mail className='icon'/>
                    <span>abc@gmail.com</span>
                </div>
            </div> 
            <div className='right'>
                <div className='hamburger' onClick={handleToggle}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
