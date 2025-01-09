export default function Message() {
  function handleClick() {
    console.log("Button was clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click to get a message</button>
    </div>
  );
}
