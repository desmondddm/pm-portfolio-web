import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function TimelineConnector() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      ref={ref}
      className="absolute left-[15px] top-0 bottom-0 w-px pointer-events-none overflow-hidden"
    >
      <motion.div
        className="w-full h-full"
        style={{
          background: "linear-gradient(to bottom, #2E6DB4 0%, #B0BAC9 60%, transparent 100%)",
          transformOrigin: "top",
        }}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
