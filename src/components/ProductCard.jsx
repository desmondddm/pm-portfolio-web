import { memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink } from "lucide-react"
import { StorySection } from "./StorySection"

export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const ProductCard = memo(function ProductCard({ product, isOpen, onToggle }) {
  return (
    <motion.div variants={cardVariants} className="relative pl-10">
      {/* Timeline node */}
      <div className="absolute left-0 top-5 w-[30px] h-[30px] rounded-full bg-[#F7F8FC] border-2 border-[#2E6DB4] flex items-center justify-center z-10">
        <span className="text-[9px] font-bold text-[#2E6DB4] font-mono">
          {String(product.id).padStart(2, "0")}
        </span>
      </div>

      <div
        className="bg-white border border-[#E2E6F0] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#2E6DB4]/40 hover:shadow-md shadow-sm cursor-pointer"
        onClick={() => onToggle(product.id)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle(product.id)}
      >
        {/* Card header */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Meta row */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono text-[#7A8BA5] flex-shrink-0">{product.year}</span>
                <span className="text-[#B0BAC9] flex-shrink-0">·</span>
                <span className="text-[11px] text-[#7A8BA5] truncate">{product.role}</span>
              </div>

              {/* Name + tagline */}
              <h3 className="text-[22px] font-bold text-[#1A2B4A] leading-tight mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-[#5A6B85] mb-4">{product.tagline}</p>

              {/* Status + URL */}
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <span
                  className={`text-[11px] border rounded-md px-2 py-0.5 ${product.statusColor}`}
                >
                  {product.status}
                </span>
                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#7A8BA5] hover:text-[#2E6DB4] flex items-center gap-1 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {product.url}
                    <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className="text-[11px] text-[#7A8BA5]">{product.url}</span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-[#EBF2FA] text-[#2E6DB4] border border-[#D4E0F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-[#2E6DB4] mt-1 flex-shrink-0"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>

          {/* Outcome preview (collapsed) */}
          <div className="mt-5 pt-4 border-t border-[#E2E6F0]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A8754] flex-shrink-0" />
              <span className="text-[10px] font-bold text-[#1A8754] uppercase tracking-widest">
                Outcome
              </span>
            </div>
            <AnimatePresence>
              {!isOpen && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-sm font-medium text-[#1A2B4A] mt-1.5 leading-relaxed line-clamp-2"
                >
                  {product.outcome}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Expanded story */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#E2E6F0] px-5 pb-6 pt-5 md:px-6 space-y-5">
                {/* Outcome callout */}
                <div className="bg-[#E8F5EE] border border-[#1A8754]/25 rounded-xl p-4">
                  <span className="text-[10px] font-bold text-[#1A8754] uppercase tracking-widest">
                    Outcome
                  </span>
                  <p className="text-sm text-[#1A2B4A] mt-2 leading-relaxed">
                    {product.outcome}
                  </p>
                </div>
                <StorySection
                  label="The Problem"
                  color="text-[#C0392B]"
                  text={product.problem}
                />
                <StorySection
                  label="The Solution"
                  color="text-[#1A8754]"
                  text={product.solution}
                />
                <StorySection
                  label={"The Lesson — " + product.wallLabel}
                  color="text-[#7A8BA5]"
                  text={product.wall}
                />
                <p className="text-[12px] text-[#5A6B85] italic leading-relaxed">
                  "{product.lesson}"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
})
