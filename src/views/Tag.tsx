import React from "react";
import useTags from "../useTags";
import { useParams } from "react-router-dom";
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
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));

    return (
        <Layout>
            <TopBar>
                <Icon name="left" />
                <span>编辑标签</span>
                <Icon />
            </TopBar>

            <InputWrapper>
                <Input label={"标签名"} type={"text"} placeholder={"标签名"}/>
            </InputWrapper>

            <Center>
                <Space />
                <Button>删除标签</Button>
            </Center>
            <div>{tag.name}</div>
        </Layout>
    )
};

export  default Tag;