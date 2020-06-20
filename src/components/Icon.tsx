import React from "react";
import styled from "styled-components";

let importFolder = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importFolder(require.context('icons', true,/\.svg$/ ))} catch (err) {console.log(err)}

type Props = {
    name?: String
}

const Svg = styled.svg`
  width: 18px;
  height: 12px;
`;

const Icon = (props: Props) => {
    return (
        <Svg className={'icon'}>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </Svg>
    );
};

export default  Icon;