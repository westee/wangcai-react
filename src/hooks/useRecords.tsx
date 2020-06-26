import {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

export type Records = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
    createdAt: number
}

type newRecords = Omit<Records, 'createdAt'>

const useRecords = () => {
    const [records, setRecords] = useState<Records[]>([]);

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, []);
    useUpdate(() => {
        window.localStorage.setItem("records", JSON.stringify(records));
    }, records);

    const addRecord = (newRecord: newRecords) => {
        if (newRecord.amount <= 0) {
            alert('请输入金额');
            return false
        }
        if (newRecord.tagIds.length === 0) {
            alert('请选择标签');
            return false
        }
        const record = {...newRecord, createdAt: new Date().getTime()};
        setRecords([...records, record]);
        return true;
    };



    return {records, addRecord};
};

export default useRecords;