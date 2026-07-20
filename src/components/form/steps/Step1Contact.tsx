"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";
import { TextField } from "@/components/form/fields/TextField";

export function Step1Contact() {
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
        label="Company name"
        name="companyName"
        value={state.answers.companyName}
        onChange={(value) => setAnswers({ companyName: value })}
        error={state.errors.companyName}
      />
      <TextField
        label="Your role"
        name="role"
        value={state.answers.role}
        onChange={(value) => setAnswers({ role: value })}
        error={state.errors.role}
        placeholder="e.g. Site manager, Director, Designer"
      />
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
    </div>
  );
}
