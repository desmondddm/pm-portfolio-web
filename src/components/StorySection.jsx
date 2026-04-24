export function StorySection({ label, color, text }) {
  return (
    <div>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${color}`}>{label}</span>
      <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed">{text}</p>
    </div>
  )
}
