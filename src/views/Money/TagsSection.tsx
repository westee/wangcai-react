import styled from "styled-components";
import React, {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import mouseUp = Simulate.mouseUp;

const TagWrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
       &.selected{background: red;}
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;

const TagsSection: React.FC = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
    const [selectedTag, setSelectedTag] = useState<string[]>([]);
    const onAddTag = () => {
        const tagName = window.prompt('请输入新的标签名');
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    };

    const onToggleTag = (tag: string) => {
        const index = selectedTag.indexOf(tag)
        if(index >= 0){
            setSelectedTag(selectedTag.filter(t => t !== tag));
        } else {
            setSelectedTag([...selectedTag, tag]);
        }
    }

    return (
        <TagWrapper>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => {
                        onToggleTag(tag)
                    }} className={selectedTag.indexOf(tag) >= 0 ? 'selected' : ''}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagWrapper>
    )
}
export default TagsSection;








