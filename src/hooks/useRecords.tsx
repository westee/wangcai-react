import {useEffect, useState} from "react";
import useUpdate from "./useUpdate";

type Records = {
    tagIds: number[]
    note: string
    category: '+' | '-'
}

type newRecords = Omit<Records, 'createdAt'>

const useRecords = () => {
    const [records, setRecords] = useState();

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, []);

    const addRecord = (newRecord: Records) => {
        const record = {...newRecord, createdAt: new Date().getTime()};
        setRecords([...records, record]);
    };

    useUpdate(() => {
        window.localStorage.setItem("recoreds", JSON.stringify(records));
    }, [records]);

    return {records, addRecord};
};

export default useRecords;