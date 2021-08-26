import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FILTER_SET_TEXT } from "../redux/types";

export default function SearchBar(props) {
  const defaultSearchValue = useSelector((state) => state.filter.text);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(defaultSearchValue);

  const handleInputChange = React.useCallback(
    (e) => {
      setValue(e.target.value);
      dispatch({ type: FILTER_SET_TEXT, payload: e.target.value });
    },
    [dispatch, setValue]
  );

  return (
    <div className="search-bar">
      <i className="fa fa-search fa-rotate-90 icon"></i>
      <input
        placeholder="Start typing to filter by name..."
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
