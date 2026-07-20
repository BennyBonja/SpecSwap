"use client";

import { useUploadForm } from "@/components/form/UploadFormProvider";

export function Step5Permissions() {
  const { state, setAnswers } = useUploadForm();

  return (
    <div className="space-y-4">
      <div>
        <label className="flex items-start gap-2 text-sm text-navy-700">
          <input
            type="checkbox"
            checked={state.answers.factoryDiscussionConsent}
            onChange={(event) =>
              setAnswers({ factoryDiscussionConsent: event.target.checked })
            }
            className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
          />
          You may discuss this anonymised requirement with factories during
          the August programme.
        </label>
      </div>
      <div>
        <label className="flex items-start gap-2 text-sm text-navy-700">
          <input
            type="checkbox"
            checked={state.answers.clarificationContactConsent}
            onChange={(event) =>
              setAnswers({ clarificationContactConsent: event.target.checked })
            }
            className="mt-0.5 rounded border-slate-400 text-coral-500 focus:ring-navy-500"
          />
          You may contact me to clarify scope.
        </label>
      </div>
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
  );
}
