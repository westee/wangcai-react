import {useEffect, useRef} from "react";

const useUpdate = (fn: ()=>void, deps: any[]) => {
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    });

    useEffect(() => {
        if (count.current > 1) {
            fn()
        }
    }, deps); // tags每次必須是新对象
};

export default useUpdate;
