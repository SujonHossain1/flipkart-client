/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-shadow */
import './Category.css';

const AddCategory = ({ setShow, categoriesList, inputHandler, submitHandler, category }) => {
    return (
        <div className="col-md-7 py-3">
            <form onSubmit={submitHandler}>
                <div className="input__group">
                    <label htmlFor=""> Category Name* </label>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Category Name"
                        onChange={inputHandler}
                        value={category.name}
                    />
                </div>

                <div className="input__group">
                    <label htmlFor="">Parent Category</label>
                    <div className="input__select__group">
                        <select
                            name="parentId"
                            id=""
                            className="input__select"
                            onChange={inputHandler}
                        >
                            <option value="">Select Category</option>
                            {categoriesList.map((category) => (
                                <option value={category.value}> {category.name} </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="input__group">
                    <label htmlFor="">Category Image* </label>
                    <input type="file" name="image" id="" />
                </div>
                <div className="input__group">
                    <label htmlFor="">Slug *</label>
                    <input
                        type="text"
                        name="slug"
                        id=""
                        placeholder="Slug"
                        onChange={inputHandler}
                        defaultValue={category.slug}
                    />
                </div>

                <div className="input__group">
                    <button type="button" className="cancel__btn" onClick={() => setShow(false)}>
                        Cancel
                    </button>
                    <button type="submit" className="submit__btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCategory;
