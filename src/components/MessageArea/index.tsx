import { useState } from "react";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: any;
  error: false | string;
  id: string;
  name: string;
  placeholder?: string; // optional, defaults to "Public Message" if not provided.
}
const MessageArea = ({
  handleChange,
  handleBlur,
  value,
  id,
  name,
  placeholder = "Public Message",
}: Props) => {
  // const [_f, setF] = useState(false);

  return (
    <div className={`bg-white dark:bg-darkContrast rounded p-4 w-full flex`}>
      <textarea
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="bg-transparent outline-none focus:outline-none dark:placeholder:text-grey80 w-full truncate"
        rows={5}
        value={value}
      />
      <span className="mt-auto text-sm dark:text-grey80">
        {value.length + "/" + 255}
      </span>
    </div>
  );
};

export default MessageArea;
MessageArea;
