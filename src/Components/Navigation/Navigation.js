import React from 'react';
import styled from 'styled-components';
import avater from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';
// import { menuItems } from '../utils/menuItems';
// import { signout } from '../utils/Icons';


function Navigation() {
  return (
    <NavStyled>
        <div className="user-con">
            <img src={avater} alt="" />
            <div class="text">
                <h2>Tina</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className="menu-items">
            {menuItems.map((item) => {
                return <li
                    key={item.id}
                >
                {item.icon}
                <span>{item.tile}</span>
            </li>
            })}

        </ul>

        <div className="bottom-nav">
            <li>
                {signout} Sign Out
            </li>
        </div>

        


    </NavStyled>
  )
}

export default Navigation

const NavStyled = styled.nav`
`