import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from "./Money/TagsSection";
import NotesSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";
import useRecords from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
};

type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState(defaultFormData);

    const {addRecord} = useRecords();

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    };

    const submit = ()=>{
        if(addRecord(selected)){
            alert('保存成功');
        }
        setSelected(defaultFormData);
    };



    return (
        <MyLayout>
            {JSON.stringify(selected)}
            <hr/>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}
            />

            <NotesSection value={selected.note}
                          onChange={(note) => onChange({note})}
            />
            <CategorySection value={selected.category}
                             onChange={(category) => onChange({category})}
            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
}

export default Money;