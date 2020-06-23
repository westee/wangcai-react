import React, {SVGAttributes} from "react";
import styled from "styled-components";
import cs from 'classnames'

let importFolder = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importFolder(require.context('icons', true,/\.svg$/ ))} catch (err) {console.log(err)}

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
        <Svg className={ cs('icon', className)} {...rest}>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </Svg>
    );
};

export default  Icon;