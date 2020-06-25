import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import Input from "../../components/Input";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;

`;
type Props = {
    value: string;
    onChange: (e: string)=>void;
}
const NoteSection: React.FC<Props> = (props) => {
    const note = props.value;
    // const refInput = useRef<HTMLInputElement>(null);
    const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
            props.onChange(e.target.value)
    };
    return (
        <Wrapper>
            <Input label={"备注"} value={note} placeholder={"在这里添加备注"} onChange={onChange} />
        </Wrapper>
    )
};

export default NoteSection;