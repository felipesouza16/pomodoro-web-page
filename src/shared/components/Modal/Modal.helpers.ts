export const getTime = (timeWatch: number) => {
  const min = Math.floor(timeWatch / 60);
  return `${min < 10 ? '0' + min : min}`;
};

export const onlyInputNumber = (
  event: React.KeyboardEvent<HTMLInputElement>,
) => {
  if (/\D/.test(event.key)) {
    event.preventDefault();
  }
};

export const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  const { value } = event.target;

  if (Number(value) > 60) {
    event.target.value = String(60);
  }
};
