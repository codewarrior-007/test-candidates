import React from "react";
import { useSelector } from "react-redux";
import CandidateItem from "./Item";

export default function CandidatesList() {
  const { step, text } = useSelector((state) => state.filter);
  const candidates = useSelector((state) => state.candidates).filter(
    (c) => (!step || c.step === step) && c.name.toLowerCase().includes(text)
  );
  return (
    <table className="table-candidates">
      <thead>
        <tr>
          <th key="candidate">CANDIDATE</th>
          <th key="date_interviewed">DATE INTERVIEWED</th>
          <th key="option"></th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((c) => (
          <CandidateItem key={c.id} data={c} />
        ))}
      </tbody>
    </table>
  );
}
