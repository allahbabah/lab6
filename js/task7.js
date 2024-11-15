const categories = document.getElementById('categories');
const categoriesItems = document.querySelectorAll('.item');



const showCategoriesLength = () => {
    const categoriesLength = categories.children.length;
    console.log(`Number of categories: ${categoriesLength}`);
}

const showCategoriesItemsData = () => {
    categoriesItems.forEach(item => {
        const itemHeader = item.querySelector('h2').textContent;
        const itemLength = item.querySelectorAll('li').length;
        console.log(`Category: ${itemHeader}`);
        console.log(`Elements: ${itemLength}`);
    });

}

showCategoriesLength();
showCategoriesItemsData();