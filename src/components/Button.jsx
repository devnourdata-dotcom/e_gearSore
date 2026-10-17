function Button({ className, onClick, children }) {
  return (
    <button
      onClick={() => onClick()}
      className={`
            p-3
            text-buttonSize
            bg-primary
            !rounded-2xl
            text-white
            hover:bg-primaryChange
            cursor-pointer
            ${className}`}
    >
      {children}
    </button>
  );
}
export default Button;
