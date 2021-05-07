const createCategoryList = (getCategories = [], options = []) => {
    getCategories.forEach((category) => {
        options.push({ value: category._id, name: category.name });
        if (category.children) {
            createCategoryList(category.children, options);
        }
    });

    return options;
};

export default createCategoryList;
