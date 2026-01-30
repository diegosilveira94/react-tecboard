export interface Event {
  src: string;
  alt: string;
  title: string;
  theme: string;
  date: Date | string;
  description: string;
}

export interface EventCardProps {
  event: Event;
}
