export default function ConditionalComponent() {
  const display = false;

  if (display) {
    return <h1>This is true condition</h1>;
  } else {
    return <h1>This is false condition</h1>;
  }
}
