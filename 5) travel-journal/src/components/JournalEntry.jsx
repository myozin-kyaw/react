import mapIcon from "../assets/images/marker.png";
import Entry from "./Entry";

export default function TravelPlace() {
  return (
    <>
      <Entry
        image={{src: "https://scrimba.com/links/travel-journal-japan-image-url", alt=""}}
        country="Japan"
        link="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9"
        entryTitle="Mount Fuji"
        tripDates="12 Jan, 2021 - 24 Jan, 2021"
        entryText="Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists."
      />
    </>
  );
}
