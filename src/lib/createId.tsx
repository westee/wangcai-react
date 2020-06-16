let id: number = 0;
const createId = () => {
    id += 1;
    return id;
};

export default createId;

