import "./filter.css";
const Filter = () => {
    return (
        <div className="filter-container">
            <div>
                <h4>Color</h4>
                <ul type="none">
                    <li>
                        <input type="checkbox" /> Red
                    </li>
                    <li>
                        {" "}
                        <input type="checkbox" />
                        Blue
                    </li>
                    <li>
                        {" "}
                        <input type="checkbox" />
                        Green
                    </li>
                </ul>
                <div>
                    <h4>Gender</h4>
                    <ul type="none">
                        <li>
                            {" "}
                            <input type="checkbox" /> Men
                        </li>
                        <li>
                            {" "}
                            <input type="checkbox" />
                            Women
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Price</h4>
                    <ul type="none">
                        <li>
                            {" "}
                            <input type="checkbox" />0 - Rs250
                        </li>
                        <li>
                            {" "}
                            <input type="checkbox" />
                            Rs251 - Rs450
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Type</h4>
                    <ul type="none">
                        <li>
                            {" "}
                            <input type="checkbox" />
                            Polo
                        </li>
                        <li>
                            {" "}
                            <input type="checkbox" />
                            Hoodie
                        </li>
                        <li>
                            {" "}
                            <input type="checkbox" />
                            Basic
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Filter;
