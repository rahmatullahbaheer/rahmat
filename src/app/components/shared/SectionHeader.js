export default function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-slate-400 text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
