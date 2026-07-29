/**
 * Royal Serenity — عنوان قسم موحّد: kicker ذهبي + عنوان كبير + وصف اختياري
 */
interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({ kicker, title, subtitle, light, center }: Props) {
  return (
    <div className={`reveal ${center ? "text-center" : ""} mb-10 md:mb-14`}>
      <span className={`kicker ${center ? "justify-center" : ""}`}>{kicker}</span>
      <h2
        className={`mt-4 text-3xl md:text-5xl font-bold ${
          light ? "text-[var(--ivory)]" : "text-[var(--emerald-deep)]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-[var(--ivory)]/75" : "text-[var(--charcoal)]/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
