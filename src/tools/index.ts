export const debounce = (fn: any, delay = 1000) => {
    let timer = null as any;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
};
