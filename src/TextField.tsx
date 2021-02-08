import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person?: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PersonInfo {
  firstName: string;
}

export const TextField: React.FC<Props> = ({ text, ok, handleChange }) => {
  const [count, setCount] = useState<number | null>(0);
  const [personInfo, setPersonInfo] = useState<PersonInfo>({
    firstName: "james",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <strong>
        {text} is {ok}
      </strong>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
