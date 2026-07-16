"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { OptionCardGroup } from "@/components/form/fields/OptionCardGroup";
import { SWAP_TYPE_OPTIONS } from "@/lib/formSteps";

export function Step2SwapType() {
  const { state, setAnswers } = useUploadForm();

  return (
    <OptionCardGroup
      legend="What are you sourcing?"
      name="swapType"
      options={SWAP_TYPE_OPTIONS}
      value={state.answers.swapType}
      onChange={(value) => setAnswers({ swapType: value })}
      error={state.errors.swapType}
      allowOther
      otherValue={state.answers.swapTypeOther}
      onOtherChange={(value) => setAnswers({ swapTypeOther: value })}
      otherError={state.errors.swapTypeOther}
    />
  );
}
