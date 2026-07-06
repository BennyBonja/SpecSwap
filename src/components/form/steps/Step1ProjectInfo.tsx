"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TextField } from "@/components/form/fields/TextField";

export function Step1ProjectInfo() {
  const { state, setAnswers } = useUploadForm();

  return (
    <div className="space-y-5">
      <TextField
        label="Your company name"
        name="companyName"
        value={state.answers.companyName}
        onChange={(value) => setAnswers({ companyName: value })}
        error={state.errors.companyName}
        autoFocus
      />
      <TextField
        label="Project name"
        name="projectName"
        value={state.answers.projectName}
        onChange={(value) => setAnswers({ projectName: value })}
        error={state.errors.projectName}
      />
      <TextField
        label="Project address"
        name="projectAddress"
        value={state.answers.projectAddress}
        onChange={(value) => setAnswers({ projectAddress: value })}
        error={state.errors.projectAddress}
      />
    </div>
  );
}
