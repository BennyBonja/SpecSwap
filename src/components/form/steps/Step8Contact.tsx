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
      <div className="space-y-4">
        <div>
          <label className="flex items-start gap-2 text-sm text-navy-700">
            <input
              type="checkbox"
              checked={state.answers.uploadAuthorised}
              onChange={(event) =>
                setAnswers({ uploadAuthorised: event.target.checked })
              }
              className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
            />
            I confirm I am authorised to upload these documents and share
            them with SpecSwap for review, sourcing and procurement
            purposes.
          </label>
          {state.errors.uploadAuthorised ? (
            <p className="mt-1.5 text-sm text-coral-700">
              {state.errors.uploadAuthorised}
            </p>
          ) : null}
        </div>
        <div>
          <label className="flex items-start gap-2 text-sm text-navy-700">
            <input
              type="checkbox"
              checked={state.answers.supplierSharingAcknowledged}
              onChange={(event) =>
                setAnswers({
                  supplierSharingAcknowledged: event.target.checked,
                })
              }
              className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
            />
            I understand SpecSwap may share relevant project, product and
            schedule information with suppliers, consultants, installers
            and service providers where reasonably required to provide its
            services.
          </label>
          {state.errors.supplierSharingAcknowledged ? (
            <p className="mt-1.5 text-sm text-coral-700">
              {state.errors.supplierSharingAcknowledged}
            </p>
          ) : null}
        </div>
        <div>
          <label className="flex items-start gap-2 text-sm text-navy-700">
            <input
              type="checkbox"
              checked={state.answers.substitutionApprovalAcknowledged}
              onChange={(event) =>
                setAnswers({
                  substitutionApprovalAcknowledged: event.target.checked,
                })
              }
              className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
            />
            I understand any recommended alternatives must be reviewed and
            approved by the relevant client, builder, designer, architect
            or project stakeholder before ordering.
          </label>
          {state.errors.substitutionApprovalAcknowledged ? (
            <p className="mt-1.5 text-sm text-coral-700">
              {state.errors.substitutionApprovalAcknowledged}
            </p>
          ) : null}
        </div>
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
            <span>
              I agree to the SpecSwap{" "}
              <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-coral-600 underline underline-offset-2"
              >
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-coral-600 underline underline-offset-2"
              >
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {state.errors.termsAccepted ? (
            <p className="mt-1.5 text-sm text-coral-700">
              {state.errors.termsAccepted}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
