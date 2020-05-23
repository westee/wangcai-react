import Layout from "../components/Layout";
import React, {useState} from "react";
import useTags from "../useTags";

function Tags() {
    const {tags, setTags} = useTags();
    return  (
        <Layout>
            <h2>Tags</h2>
        </Layout>
    );
}

export default Tags;