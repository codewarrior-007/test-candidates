import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { patchCandidate } from "../../api";
import { CANDIDATE_UPDATE_STEP } from "../../redux/types";

export default function CandidateItem({ data }) {
  const { name, step, time_interview } = data;

  const steps = useSelector((state) => state.steps);
  const dispatch = useDispatch();

  const [saving, setSaving] = React.useState(false);

  const handleSelectStep = React.useCallback(
    (e) => {
      const newCandidate = { ...data, step: e.target.value };
      setSaving(true);
      patchCandidate(
        newCandidate,
        () => {
          dispatch({ type: CANDIDATE_UPDATE_STEP, payload: newCandidate });
          setSaving(false);
        },
        () => setSaving(false)
      );
    },
    [dispatch, setSaving]
  );

  return (
    <tr>
      <td key="name">{name}</td>
      <td key="date">{moment(time_interview).format("ddd, MMM D")}</td>
      <td key="options">
        <select
          className={!!step ? "step-selected" : ""}
          value={step}
          onChange={handleSelectStep}
          disabled={saving ? "disabled" : undefined}
        >
          <option key="choose" value="">
            CHOOSE STEP
          </option>
          {steps.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {saving && <i className="fa fa-spinner fa-spin icon"></i>}
      </td>
    </tr>
  );
}
