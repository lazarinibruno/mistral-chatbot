interface ChatButtonProps {
  id: string;
  title: string;
}

export function ConvoButton({ id, title }: ChatButtonProps) {
  return <button className="btn btn-ghost font-normal">{title}</button>;
}
