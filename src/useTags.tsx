import {useState} from "react";
import createId from "./lib/createId";

const defaultTag = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTag);
    return {tags, setTags};
};

export default useTags;
