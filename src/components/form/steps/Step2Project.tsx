"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TextField } from "@/components/form/fields/TextField";
import { OptionCardGroup } from "@/components/form/fields/OptionCardGroup";
import { PROJECT_TYPE_OPTIONS, PROJECT_VALUE_BAND_OPTIONS } from "@/lib/formSteps";

export function Step2Project() {
  const { state, setAnswers } = useUploadForm();

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <TextField
          label="Project name"
          name="projectName"
          value={state.answers.projectName}
          onChange={(value) => setAnswers({ projectName: value })}
          error={state.errors.projectName}
          autoFocus
        />
        <TextField
          label="Project location"
          name="projectLocation"
          value={state.answers.projectLocation}
          onChange={(value) => setAnswers({ projectLocation: value })}
          error={state.errors.projectLocation}
          placeholder="Suburb, state"
        />
      </div>
      <OptionCardGroup
        legend="Project type"
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
      <OptionCardGroup
        legend="Approximate project value"
        name="projectValueBand"
        options={PROJECT_VALUE_BAND_OPTIONS}
        value={state.answers.projectValueBand}
        onChange={(value) => setAnswers({ projectValueBand: value })}
        error={state.errors.projectValueBand}
      />
      <TextField
        label="Required-on-site date"
        name="requiredOnSiteDate"
        type="date"
        value={state.answers.requiredOnSiteDate}
        onChange={(value) => setAnswers({ requiredOnSiteDate: value })}
        error={state.errors.requiredOnSiteDate}
      />
    </div>
  );
}
