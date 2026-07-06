export function TextField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoFocus,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-navy-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className="mt-1.5 block w-full rounded-lg border-slate-300 text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:ring-navy-500"
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-coral-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-navy-700"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        rows={4}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className="mt-1.5 block w-full rounded-lg border-slate-300 text-navy-900 placeholder:text-slate-400 focus:border-navy-500 focus:ring-navy-500"
      />
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-coral-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
