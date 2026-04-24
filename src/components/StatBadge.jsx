export function StatBadge({ n, label, accent }) {
  return (
    <div>
      <div className={`font-bold ${accent ? "text-3xl md:text-4xl text-[#2E6DB4]" : "text-2xl md:text-3xl text-[#1A2B4A]"}`}>{n}</div>
      <div className="text-xs text-[#7A8BA5] mt-0.5">{label}</div>
    </div>
  )
}
