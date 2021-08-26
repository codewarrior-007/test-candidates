import React from "react";
import { useDispatch } from "react-redux";
import { fetchCandidates } from "../api";

import BoxFilter from "../components/BoxFilter";
import CandidatesList from "../components/candidates/List";
import SearchBar from "../components/SearchBar";
import { CANDIDATE_SET_LIST } from "../redux/types";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchCandidates((data) =>
      dispatch({ type: CANDIDATE_SET_LIST, payload: data })
    );
  }, [dispatch]);

  return (
    <div className="container">
      <BoxFilter />
      <div>
        <SearchBar />
        <CandidatesList />
      </div>
    </div>
  );
}
