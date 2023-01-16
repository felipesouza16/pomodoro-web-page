import { FieldValues, useForm, UseFormSetValue } from 'react-hook-form';

export const getTime = (timeWatch: number) => {
  const min = Math.floor(timeWatch / 60);
  return `${min < 10 ? '0' + min : min}`;
};

export const handleBlur = (
  event: React.FocusEvent<HTMLInputElement>,
  setValue: UseFormSetValue<FieldValues>,
  typeButton: string,
) => {
  const { value } = event.target;

  if (Number(value) > 60) {
    event.target.value = String(60);
    setValue(typeButton, 60);
  } else if (Number(value) <= 0) {
    event.target.value = String(1);
    setValue(typeButton, 1);
  }
};
