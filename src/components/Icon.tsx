import React, {SVGAttributes} from "react";
import styled from "styled-components";
import cs from 'classnames'

import sprite from 'icons/sprite.svg';

const Svg = styled.svg`
  width: 18px;
  height: 12px;
`;

type Props = {
    name?: String
} & SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const {name, children, className, ...rest} = props;
    return (
        <Svg className={cs('icon', className)} {...rest}>
            {props.name && <use xlinkHref={`${sprite}#${name}`} />}
        </Svg>
    );
};

export default Icon;
