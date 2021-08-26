import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_SET_STEP } from "../redux/types";

export default function BoxFilter() {
  const dispatch = useDispatch();
  const { step: currentStep, text: currentFilterText } = useSelector(
    (state) => state.filter
  );
  const steps = useSelector((state) => state.steps);
  const candidates = useSelector((state) => state.candidates).filter((c) =>
    c.name.toLowerCase().includes(currentFilterText)
  );

  const handleClickStep = React.useCallback(
    (newStep) => {
      if (newStep === currentStep) return;
      dispatch({ type: FILTER_SET_STEP, payload: newStep });
    },
    [dispatch, currentStep]
  );

  const itemFilter = React.useCallback(
    (step) => {
      const countForStep = candidates.filter((c) => c.step === step).length;
      return (
        <li
          key={step}
          className={currentStep === step ? "selected" : ""}
          onClick={() => handleClickStep(step)}
        >
          {step} ({countForStep})
        </li>
      );
    },
    [currentStep, candidates]
  );

  return (
    <ul className="box-filter">
      <li
        key="all"
        className={currentStep === "" ? "selected" : ""}
        onClick={() => handleClickStep("")}
      >
        All Candidates ({candidates.length})
      </li>
      {steps.map(itemFilter)}
    </ul>
  );
}
