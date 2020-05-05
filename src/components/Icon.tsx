import React from "react";

let importFolder = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
try {importFolder(require.context('icons', true,/\.svg$/ ))} catch (err) {console.log(err)}

type Props = {
    name: String
}

const Icon = (props: Props) => {
    return (
        <svg className={'icon'}>
            <use xlinkHref={'#' + props.name}></use>
        </svg>
    );
};

export default  Icon;