import mapIcon from "../assets/images/marker.png";

export default function Entry(props) {
  const { image, country, link, entryTitle, tripDates, entryText } = props;
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          src={mapIcon}
          alt="map icon"
        />
        <span className="country">{country}</span>
        <a href={link}>View on Google Map</a>
        <h2 className="entry-title">{entryTitle}</h2>
        <p className="trip-dates">{tripDates}</p>
        <p className="entry-text">{entryText}</p>
      </div>
    </article>
  );
}
