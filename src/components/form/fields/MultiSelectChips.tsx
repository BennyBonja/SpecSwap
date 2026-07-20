export function MultiSelectChips({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}) {
  const toggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <fieldset>
      <legend className="block text-sm font-medium text-navy-700">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const isChecked = value.includes(option);
          return (
            <label
              key={option}
              className={`flex min-h-[40px] cursor-pointer items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-navy-500 focus-within:ring-offset-2 ${
                isChecked
                  ? "border-coral-500 bg-coral-50 text-coral-700"
                  : "border-slate-300 text-navy-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggle(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
