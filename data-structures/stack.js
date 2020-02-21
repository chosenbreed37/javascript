

const Stack = () => {

    let top = null;

    const peek = () => {
        return top && top.value;
    }

    const push = (item) => {
        const node = {
            value: item,
            next: top
        };
        top = node;
    }

    const pop = () => {
        const result = top && top.value;
        top = top && top.next;
        return result;
    }

    const isEmpty = () => {
        return top === null;
    }

    return {
        push,
        pop,
        isEmpty,
        peek
    }
}

export { Stack };