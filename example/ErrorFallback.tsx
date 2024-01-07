interface Props {
  error: Error;
}

export default function ErrorFallback({ error }: Props) {
  return <p>{error.name}</p>;
}
