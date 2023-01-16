import { InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
};

export const Input = (
  htmlInputProps: InputHTMLAttributes<HTMLInputElement> & InputProps,
) => {
  return (
    <>
      <label className="form-label inline-block mb-2 text-gray-700">
        {htmlInputProps.label}
      </label>
      <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
        <label className="flex items-center rounded-r-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">
          minutos
        </label>
        <input
          className="peer w-full rounded-l-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
          type="text"
          name="times"
          id="times"
          placeholder="Insira os minutos"
          {...htmlInputProps}
        />
      </div>
    </>
  );
};
