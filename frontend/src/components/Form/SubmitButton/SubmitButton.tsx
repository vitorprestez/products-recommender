interface SubmitButtonProps {
  text: string;
}

export function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button
      data-testid="submit-button"
      type="submit"
      className="px-4 py-2 bg-rd-primary hover:bg-rd-primary/80 text-white rounded transition"
    >
      {text}
    </button>
  );
}

export default SubmitButton;
