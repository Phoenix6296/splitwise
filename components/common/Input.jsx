import Image from "next/image";

export const Input = ({
  value,
  defaultValue,
  label,
  prefixIcon,
  placeholder,
  onFocus,
  onBlur,
  disabled,
  max,
  min,
  type,
  minLength,
  maxLength,
  onChange,
  className,
  required,
  containerStyles = "w-full",
  pattern,
  focusStyles,
  reference,
  onInvalid,
  onKeyDown,
  onPaste,
  keys,
  checked,
  mt = "mt-2",
}) => {
  return (
    <div className={containerStyles}>
      <div className="flex items-center gap-1">
        <label className="text-base flex gap-2 items-center" htmlFor={label}>
          {prefixIcon && (
            <Image src={prefixIcon} alt={label} width={20} height={20} />
          )}
          {label}
        </label>
      </div>
      <div className={`flex items-center ${mt} gap-1`}>
        <input
          key={keys}
          onInvalid={onInvalid}
          ref={reference}
          className={`${className} ${disabled ? "cursor-not-allowed" : ""} ${
            focusStyles ? focusStyles : "focus:outline-none"
          } w-full border border-black border-opacity-10 py-3 px-4 rounded-lg`}
          type={type}
          name={label}
          id={label}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          defaultValue={defaultValue}
          spellCheck={false}
          pattern={pattern}
          onPaste={onPaste}
          autoComplete="off"
          checked={checked}
        />
      </div>
    </div>
  );
};
