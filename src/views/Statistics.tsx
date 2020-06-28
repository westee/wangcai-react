import Layout from "../components/Layout";
import React, {ReactNode, useState} from "react";
import CategorySection from "./Money/CategorySection";
import useRecords, {Records} from "../hooks/useRecords";
import useTags from "../hooks/useTags";
import day from 'dayjs';
import styled from "styled-components";

const CategoryWrapper = styled.div`
  background:white;
`;

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {findName} = useTags();
    const selectRecords = records.filter(r => r.category === category);
    const hash: { [K: string]: Records[] } = {}; // {'2020-05-11': [item, item],'2020-05-11': [item, item]}
    selectRecords.map(r => {
        const key = day(r.createdAt).format("YYYY-MM-DD");
        if (!(key in hash)) {
            hash[key] = []
        }
        hash[key].push(r)
    });
    console.log(hash);
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        else if (a[0] === b[0]) return 1;
        else return -1;
    });

    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={(value) => setCategory(value)}
                />
            </CategoryWrapper>
            {array.map(([date, records]) => <div>
                <h3>{date}</h3>

                <div>
                    {
                        records.map(r => {
                            return <Item>
                                <div className="tags">
                                    {r.tagIds
                                        .map(tagId => <span key={tagId}>{findName(tagId)}</span>)
                                        .reduce(
                                            (result, span, index, array) =>
                                                result.concat(index < array.length - 1 ? [span, ''] : [span]),
                                            [] as ReactNode[])
                                    }
                                </div>
                                {
                                    r.note && <div className={'note'}>
                                        {r.note}
                                    </div>
                                }
                                <div className="amount">
                                    ￥{r.amount}
                                </div>
                                {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
                                {/*{r.createdAt}*/}
                            </Item>
                        })
                    }
                </div>
            </div>)}


        </Layout>
    );
}

export default Statistics;