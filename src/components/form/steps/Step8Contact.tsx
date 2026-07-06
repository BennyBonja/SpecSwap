"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TextField } from "@/components/form/fields/TextField";

export function Step8Contact() {
  const { state, setAnswers } = useUploadForm();

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField
          label="First name"
          name="firstName"
          value={state.answers.firstName}
          onChange={(value) => setAnswers({ firstName: value })}
          error={state.errors.firstName}
          autoFocus
        />
        <TextField
          label="Last name"
          name="lastName"
          value={state.answers.lastName}
          onChange={(value) => setAnswers({ lastName: value })}
          error={state.errors.lastName}
        />
      </div>
      <TextField
        label="Email address"
        name="email"
        type="email"
        value={state.answers.email}
        onChange={(value) => setAnswers({ email: value })}
        error={state.errors.email}
      />
      <TextField
        label="Phone number"
        name="phone"
        type="tel"
        value={state.answers.phone}
        onChange={(value) => setAnswers({ phone: value })}
        error={state.errors.phone}
      />
      <div>
        <label className="flex items-start gap-2 text-sm text-navy-700">
          <input
            type="checkbox"
            checked={state.answers.termsAccepted}
            onChange={(event) =>
              setAnswers({ termsAccepted: event.target.checked })
            }
            className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
          />
          I agree to the terms and conditions
        </label>
        {state.errors.termsAccepted ? (
          <p className="mt-1.5 text-sm text-coral-700">
            {state.errors.termsAccepted}
          </p>
        ) : null}
      </div>
    </div>
  );
}
