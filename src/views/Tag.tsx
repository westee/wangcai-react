import React from "react";
import useTags from "../hooks/useTags";
import {useParams, useHistory} from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Center from "../components/Center";
import styled from "styled-components";
import Input from "../components/Input";
import Space from "../components/Space";

type Params = {
    id: string
}

const TopBar = styled.header`
  display: flex; 
  justify-content: space-between;
  align-items:center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
  
`;

const InputWrapper = styled.div`
  background:#fff;
  padding:  0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input label={"标签名"} type={"text"} placeholder={"标签名"} value={tag.name}
                       onChange={e => {
                           updateTag(tag.id, {name: e.target.value})
                       }}
                />
            </InputWrapper>

            <Center>
                <Space/>
                <Button onClick={() => {
                    deleteTag(tag.id)
                }}>删除标签</Button>
            </Center>
            <div>{tag.name}</div>
        </div>
    );
    const history = useHistory();
    const onClickBack = ()=>{
        history.goBack();
    };

    return (
        <Layout>
            <TopBar>
                <Icon name="left" className={'123'} onClick={onClickBack} />
                <span>编辑标签</span>
                <Icon/>
            </TopBar>
            {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
        </Layout>
    )
};

export default Tag;