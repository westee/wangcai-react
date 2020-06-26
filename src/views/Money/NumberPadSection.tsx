import React, {useState} from "react";
import Wrapper from "./NumberPadSection/Wrapper";
import generateOutput from "./NumberPadSection/generateOutput";

type Props = {
    value: string;
    onChange: (value: number) => void;
    onOk?: ()=>void;
}

const NumberPadSection: React.FC<Props> = (props) => {
    const [output, _setOutput] = useState(props.value);
    const setOutput = (output: string) => {
        let newOutput: string;
        if (output.length > 16) {
            newOutput = output.slice(0, 16);
        } else if (output.length === 0) {
            newOutput = '0';
        } else {
            newOutput = output
        }
        _setOutput(output);
        props.onChange(parseFloat(newOutput));
    };

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) {
            return
        }

        if(text === "OK"){
            props.onOk && props.onOk();
            return;
        }

        if ('1234567890.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
            setOutput(generateOutput(text, output));
        }
    };

    return (
        <Wrapper>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </Wrapper>
    )
};

export default NumberPadSection;