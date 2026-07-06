"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { OptionCardGroup } from "@/components/form/fields/OptionCardGroup";
import { LEAD_TIME_OPTIONS } from "@/lib/formSteps";

export function Step5LeadTime() {
  const { state, setAnswers } = useUploadForm();

  return (
    <OptionCardGroup
      legend="What lead times fit your programme?"
      name="leadTime"
      options={LEAD_TIME_OPTIONS}
      value={state.answers.leadTime}
      onChange={(value) => setAnswers({ leadTime: value })}
      error={state.errors.leadTime}
    />
  );
}
