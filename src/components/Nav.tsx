import styled from "styled-components";
import {Link} from "react-router-dom";
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
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
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
                    <Icon name={'tags'}/>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name={'money'}/>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon name={'statistics'}/>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;