import Layout from "../components/Layout";
import React, {useState} from "react";
import CategorySection from "./Money/CategorySection";
import useRecords from "../hooks/useRecords";
import useTags from "../hooks/useTags";
import day from 'dayjs';

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {findName} = useTags();

    return (
        <Layout>
            <CategorySection value={category}
                             onChange={(value) => setCategory(value)}
            />

            <div>
                {
                    records.map(r => {
                        return <div>
                            {r.tagIds.map(tagId => <span>{findName(tagId) }</span>)}
                            <hr/>
                            {r.amount}
                            <hr/>
                            {day(r.createdAt).format('YYYY年MM月DD日') }
                            {/*{r.createdAt}*/}
                        </div>
                    })
                }
            </div>
        </Layout>
    );
}

export default Statistics;