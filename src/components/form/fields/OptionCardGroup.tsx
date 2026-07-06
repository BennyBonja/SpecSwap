import { TextField } from "@/components/form/fields/TextField";

export function OptionCardGroup({
  legend,
  name,
  options,
  value,
  onChange,
  error,
  allowOther = false,
  otherValue = "",
  onOtherChange,
  otherError,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  allowOther?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
  otherError?: string;
}) {
  const allOptions = allowOther ? [...options, "Other"] : options;

  return (
    <fieldset>
      <legend className="sr-only">{legend}</legend>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {allOptions.map((option) => {
          const isChecked = value === option;
          return (
            <label
              key={option}
              className={`flex min-h-[44px] cursor-pointer items-center rounded-lg border px-4 py-3 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-navy-500 focus-within:ring-offset-2 ${
                isChecked
                  ? "border-coral-500 bg-coral-50 text-coral-700"
                  : "border-slate-300 text-navy-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={isChecked}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
      {error ? <p className="mt-2 text-sm text-coral-700">{error}</p> : null}
      {allowOther && value === "Other" ? (
        <div className="mt-4">
          <TextField
            label="Please specify"
            name={`${name}Other`}
            value={otherValue}
            onChange={(val) => onOtherChange?.(val)}
            error={otherError}
            autoFocus
          />
        </div>
      ) : null}
    </fieldset>
  );
}
