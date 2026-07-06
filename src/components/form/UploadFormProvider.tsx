"use client";

import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import { INITIAL_ANSWERS } from "@/types/form";
import type { UploadFormAction, UploadFormState } from "@/types/form";
import { STEP_COUNT } from "@/lib/formSteps";
import { stepSchemas } from "@/components/form/formSchema";

const initialState: UploadFormState = {
  isOpen: false,
  stepIndex: 0,
  answers: INITIAL_ANSWERS,
  errors: {},
  submitStatus: "idle",
  submitError: null,
};

function reducer(
  state: UploadFormState,
  action: UploadFormAction,
): UploadFormState {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "SET_ANSWERS":
      return {
        ...state,
        answers: { ...state.answers, ...action.payload },
      };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "NEXT":
      return {
        ...state,
        stepIndex: Math.min(state.stepIndex + 1, STEP_COUNT - 1),
        errors: {},
      };
    case "PREV":
      return {
        ...state,
        stepIndex: Math.max(state.stepIndex - 1, 0),
        errors: {},
      };
    case "SUBMIT_START":
      return { ...state, submitStatus: "submitting", submitError: null };
    case "SUBMIT_SUCCESS":
      return { ...state, submitStatus: "success" };
    case "SUBMIT_ERROR":
      return { ...state, submitStatus: "error", submitError: action.error };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

type UploadFormContextValue = {
  state: UploadFormState;
  open: () => void;
  close: () => void;
  setAnswers: (payload: Partial<UploadFormState["answers"]>) => void;
  next: () => void;
  prev: () => void;
  submitStart: () => void;
  submitSuccess: () => void;
  submitError: (error: string) => void;
  reset: () => void;
  validateCurrentStep: () => boolean;
};

const UploadFormContext = createContext<UploadFormContextValue | null>(null);

export function UploadFormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const open = useCallback(() => dispatch({ type: "OPEN" }), []);
  const close = useCallback(() => dispatch({ type: "CLOSE" }), []);
  const setAnswers = useCallback(
    (payload: Partial<UploadFormState["answers"]>) =>
      dispatch({ type: "SET_ANSWERS", payload }),
    [],
  );
  const next = useCallback(() => dispatch({ type: "NEXT" }), []);
  const prev = useCallback(() => dispatch({ type: "PREV" }), []);
  const submitStart = useCallback(() => dispatch({ type: "SUBMIT_START" }), []);
  const submitSuccess = useCallback(
    () => dispatch({ type: "SUBMIT_SUCCESS" }),
    [],
  );
  const submitErrorFn = useCallback(
    (error: string) => dispatch({ type: "SUBMIT_ERROR", error }),
    [],
  );
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);

  const validateCurrentStep = useCallback(() => {
    const schema = stepSchemas[state.stepIndex];
    if (!schema) return true;
    const result = schema(state.answers);
    dispatch({ type: "SET_ERRORS", errors: result.errors });
    return result.success;
  }, [state.stepIndex, state.answers]);

  return (
    <UploadFormContext.Provider
      value={{
        state,
        open,
        close,
        setAnswers,
        next,
        prev,
        submitStart,
        submitSuccess,
        submitError: submitErrorFn,
        reset,
        validateCurrentStep,
      }}
    >
      {children}
    </UploadFormContext.Provider>
  );
}

export function useUploadForm() {
  const context = useContext(UploadFormContext);
  if (!context) {
    throw new Error("useUploadForm must be used within UploadFormProvider");
  }
  return context;
}
