import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
    value: '-' | '+';
    onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
    const categoryMap = {'-': '支出', '+': '收入'};
    type Y = keyof typeof categoryMap;
    const [categoryList] = useState<(Y[])>(['-', '+']);
    const category = props.value;
    return (
        <Wrapper>
            <ul>
                {categoryList.map(item =>
                    <li key={item} className={category === item ? 'selected' : ''}
                        onClick={() => {
                            props.onChange(item);
                        }}
                    >{categoryMap[item]}
                    </li>
                )}
            </ul>
        </Wrapper>
    )
};
export default CategorySection;