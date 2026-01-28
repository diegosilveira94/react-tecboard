import "./Banner.styles.css";
import type { BannerProps } from "./Banner.types";

function Banner({ className, alt, src }: BannerProps) {
  return (
    <section className={className}>
      <img src={src} alt={alt} />
    </section>
  );
}

export default Banner;
