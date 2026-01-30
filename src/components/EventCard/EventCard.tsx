import "./EventCard.styles.css";
import type { EventCardProps } from "./EventCard.types";

function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("pt-BR");
  return (
    <div className="event-card">
      <img src={event.src} alt={event.alt} className="card-event" />
      <div className="body">
        <p className="tag">{event.theme}</p>
        <p className="date">{formattedDate}</p>
        <h4 className="title">{event.title}</h4>
        <p className="description">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard;
