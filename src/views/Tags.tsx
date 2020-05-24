import Layout from "../components/Layout";
import React, {useState} from "react";
import useTags from "../useTags";
import Icon from "../components/Icon";
import styled from "styled-components";

const TagList = styled.ol`
  font-size: 16px;
  background:#fff;
  > li{
  border-bottom: 1px solid #d5d5d9;
  line-height: 20px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`;

const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background:#767676;
  border-radius: 4px;
  color: #fff;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;

const Space = styled.div`
  height: 16px;
`

function Tags() {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <TagList>
                {
                    tags.map(tag => (
                        <li key={tag}>
                            <span className={"oneLine"}>{tag}</span>
                            <Icon name={"right"}></Icon>
                        </li>
                    ))
                }
            </TagList>
            <Center>
                <Space />
                <Button>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;