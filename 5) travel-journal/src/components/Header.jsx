import globe from "../assets/images/globe.png";

export default function Header() {
  return (
    <header>
      <img
        src={globe}
        alt="globe icon"
      />
      <h1>My Travel Journey</h1>
    </header>
  );
}
