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
    <div
      className={`bg-grey10 dark:bg-darkContrast rounded p-4 w-full flex-col flex`}
    >
      <textarea
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="bg-transparent text-black dark:text-white outline-none focus:outline-none dark:placeholder:text-grey80 w-full"
        rows={5}
        value={value}
      />
      <span
        className={`mt-auto text-sm ${value.length === 0 ? "text-grey100" : "text-black dark:text-grey80"}  text-right`}
      >
        {value.length + "/" + 255}
      </span>
    </div>
  );
};

export default MessageArea;
MessageArea;
