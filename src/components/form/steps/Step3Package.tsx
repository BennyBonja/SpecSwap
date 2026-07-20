"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TextField, TextAreaField } from "@/components/form/fields/TextField";
import { OptionCardGroup } from "@/components/form/fields/OptionCardGroup";
import { MultiSelectChips } from "@/components/form/fields/MultiSelectChips";
import { SPEC_FIXED_OPTIONS, PRIORITY_OPTIONS } from "@/lib/formSteps";

export function Step3Package() {
  const { state, setAnswers } = useUploadForm();

  return (
    <div className="space-y-6">
      <TextAreaField
        label="What product or package is this?"
        name="packageDescription"
        value={state.answers.packageDescription}
        onChange={(value) => setAnswers({ packageDescription: value })}
        error={state.errors.packageDescription}
        placeholder="e.g. 60 task chairs and workstations for a Melbourne fitout"
      />
      <TextField
        label="Approximate quantity"
        name="packageQuantity"
        value={state.answers.packageQuantity}
        onChange={(value) => setAnswers({ packageQuantity: value })}
        error={state.errors.packageQuantity}
      />
      <TextField
        label="Current local quote (optional)"
        name="currentLocalQuote"
        value={state.answers.currentLocalQuote}
        onChange={(value) => setAnswers({ currentLocalQuote: value })}
        error={state.errors.currentLocalQuote}
        placeholder="e.g. $184,000"
      />
      <OptionCardGroup
        legend="Is the spec fixed, or open to alternatives?"
        name="specFixed"
        options={SPEC_FIXED_OPTIONS}
        value={state.answers.specFixed}
        onChange={(value) => setAnswers({ specFixed: value })}
        error={state.errors.specFixed}
      />
      <MultiSelectChips
        legend="What matters most?"
        options={PRIORITY_OPTIONS}
        value={state.answers.priorities}
        onChange={(value) => setAnswers({ priorities: value })}
      />
    </div>
  );
}
