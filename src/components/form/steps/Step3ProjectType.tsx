"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { OptionCardGroup } from "@/components/form/fields/OptionCardGroup";
import { PROJECT_TYPE_OPTIONS } from "@/lib/formSteps";

export function Step3ProjectType() {
  const { state, setAnswers } = useUploadForm();

  return (
    <OptionCardGroup
      legend="What type of project?"
      name="projectType"
      options={PROJECT_TYPE_OPTIONS}
      value={state.answers.projectType}
      onChange={(value) => setAnswers({ projectType: value })}
      error={state.errors.projectType}
      allowOther
      otherValue={state.answers.projectTypeOther}
      onOtherChange={(value) => setAnswers({ projectTypeOther: value })}
      otherError={state.errors.projectTypeOther}
    />
  );
}
