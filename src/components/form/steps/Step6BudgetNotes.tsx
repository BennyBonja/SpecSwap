"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TextField, TextAreaField } from "@/components/form/fields/TextField";

export function Step6BudgetNotes() {
  const { state, setAnswers } = useUploadForm();

  return (
    <div className="space-y-5">
      <TextField
        label="What is your budget?"
        name="budget"
        value={state.answers.budget}
        onChange={(value) => setAnswers({ budget: value })}
        error={state.errors.budget}
        placeholder="e.g. $25,000"
        autoFocus
      />
      <TextAreaField
        label="Any notes or exclusions?"
        name="notes"
        value={state.answers.notes}
        onChange={(value) => setAnswers({ notes: value })}
        placeholder="Anything we should know before reviewing your schedule"
      />
    </div>
  );
}
