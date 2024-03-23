const ScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView();
    }
};
export default ScrollTo;



