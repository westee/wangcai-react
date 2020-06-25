import {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

type Records = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
}

type newRecords = Omit<Records, 'createdAt'>

const useRecords = () => {
    const [records, setRecords] = useState();

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, []);

    const addRecord = (newRecord: Records) => {
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

    useUpdate(() => {
        window.localStorage.setItem("recoreds", JSON.stringify(records));
    }, [records]);

    return {records, addRecord};
};

export default useRecords;