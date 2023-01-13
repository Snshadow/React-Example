import { useSelector, useDispatch } from "react-redux";

export function PeopleList(props) {
    const arr = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    function handleClick(e) {
        dispatch(props.onClick(e.target.parentElement));
    }

    const listItems = arr.map((val, index) => {
            return <li key={index}>{val}<input type="button" id="delperson" onClick={handleClick} value="x" /></li>
        }
    );
    return <ul>{listItems}</ul>;
}
