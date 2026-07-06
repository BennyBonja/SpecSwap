"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { OptionCardGroup } from "@/components/form/fields/OptionCardGroup";
import { INTENT_OPTIONS } from "@/lib/formSteps";

export function Step4Intent() {
  const { state, setAnswers } = useUploadForm();

  return (
    <OptionCardGroup
      legend="What are you looking for?"
      name="intent"
      options={INTENT_OPTIONS}
      value={state.answers.intent}
      onChange={(value) => setAnswers({ intent: value })}
      error={state.errors.intent}
      allowOther
      otherValue={state.answers.intentOther}
      onOtherChange={(value) => setAnswers({ intentOther: value })}
      otherError={state.errors.intentOther}
    />
  );
}
