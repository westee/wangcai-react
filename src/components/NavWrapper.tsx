import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const NavWrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    ul {
      display: flex;
      li{
        flex-basis: 33.33%;
        text-align: center;
        padding: 16px;
      }
    }
`
let Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default Nav;