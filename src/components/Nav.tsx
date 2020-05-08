import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

require('icons/money.svg');
require('icons/statistics.svg');
require('icons/tags.svg');

const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    ul {
      display: flex;
      li{
        flex-basis: 33.33%;
        padding: 4px 0;
        a{
        display: flex;
        flex-direction: column;
        align-items: center;
        &.selected{
          color: cyan;
          .icon{
          fill: cyan;
          }
        }
        }
        .icon{
            width: 24px;
            height: 24px;
        }
      }
    }
`
let Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName={'selected'}><Icon name={'tags'}/>标签页</NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName={'selected'}><Icon name={'money'}/>记账页</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName={'selected'}><Icon name={'statistics'}/>统计页</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;