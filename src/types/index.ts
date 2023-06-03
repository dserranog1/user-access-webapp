export type CustomInputField = {
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  label: string;
  rules: ((value: string) => boolean | string)[];
  value: string;
  error: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};
