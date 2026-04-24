import { useReducer, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Search, Code2, Package } from "lucide-react"
import { PRODUCTS } from "./data/products"
import { ProductCard } from "./components/ProductCard"
import { StatBadge } from "./components/StatBadge"
import { TimelineConnector } from "./components/TimelineConnector"

// ── State Management ──────────────────────────────────────────────────────────

function reducer(state, action) {
  if (action.type === "toggle") {
    return state === action.id ? null : action.id
  }
  return state
}

// ── Animation Variants ────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ── PM Portfolio Page ─────────────────────────────────────────────────────────

export default function App() {
  const [openId, dispatch] = useReducer(reducer, 1)
  const onToggle = useCallback((id) => dispatch({ type: "toggle", id }), [])

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#1A2B4A]" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>

      {/* ════════════════════════════════════════════════════════ HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28 py-20 md:py-0 overflow-hidden">

        <div className="relative max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
            {/* Text content */}
            <div className="flex-1">
              <motion.span
                className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-6 block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Product Builder · Singapore
              </motion.span>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A2B4A] leading-[1.05] mb-5"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                Desmond<br />
                <span className="text-[#2E6DB4]">de Moussac</span>
              </motion.h1>

              <motion.p
                className="text-base text-[#5A6B85] max-w-2xl leading-relaxed mb-4"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
              >
                Aeronautics degree. I don't write code. I scope problems, architect solutions, and ship production software using AI agents — Claude Code, Cursor, Lovable. {PRODUCTS.length} products shipped. One deployed to{" "}
                <span className="font-semibold text-[#3D4F6A]">20,000 users</span>
                {" "}at Changi Airport Group. Each one hit a different wall. Each wall made me a better product thinker.
              </motion.p>

              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EBF2FA] border border-[#D4E0F0] rounded-full mb-8"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#2E6DB4]" />
                <span className="text-xs font-semibold text-[#2E6DB4] tracking-wide">
                  Open to PM roles · Singapore · Let's talk
                </span>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#2E6DB4] hover:bg-[#245A9A] text-white rounded-xl font-medium transition-colors duration-200 text-sm"
                >
                  Download Resume
                </a>
                <a
                  href="#products"
                  className="px-6 py-3 bg-[#EBF2FA] hover:bg-[#2E6DB4] text-[#2E6DB4] hover:text-white rounded-xl font-medium transition-colors duration-200 text-sm"
                >
                  See the products ↓
                </a>
                <a
                  href="https://www.linkedin.com/in/desmondddm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#E2E6F0] hover:border-[#2E6DB4] text-[#3D4F6A] hover:text-[#2E6DB4] rounded-xl font-medium transition-all duration-200 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:desmond@mouss.ac"
                  className="px-6 py-3 border border-[#E2E6F0] hover:border-[#2E6DB4] text-[#3D4F6A] hover:text-[#2E6DB4] rounded-xl font-medium transition-all duration-200 text-sm"
                >
                  desmond@mouss.ac
                </a>
              </motion.div>
            </div>

            {/* Headshot */}
            <motion.div
              className="flex-shrink-0 order-first md:order-last"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="/headshot.png"
                alt="Desmond de Moussac"
                className="w-24 h-24 md:w-52 md:h-52 rounded-2xl object-cover border border-[#E2E6F0] shadow-md"
              />
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 md:flex md:gap-14 gap-6 mt-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <StatBadge n={String(PRODUCTS.length)} label="Products Shipped" />
            <StatBadge n={String(PRODUCTS.filter(p => p.status.toLowerCase().includes("live")).length)} label="Live Products" />
            <StatBadge n="20k+" label="Enterprise Users" accent />
            <StatBadge n="3+" label="Years at CAG" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ TIMELINE */}
      <section id="products" className="px-6 md:px-12 lg:px-20 xl:px-28 py-24">
        <div className="max-w-3xl mx-auto">

          {/* Section heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-3 block">
              The Product Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-3">
              {PRODUCTS.length} products. {PRODUCTS.length} walls. Each one shaped the next.
            </h2>
            <p className="text-sm text-[#7A8BA5]">
              From domain dependency to marketplace dynamics to product instinct — click any card to see the problem, the solution, and the lesson.
            </p>
          </motion.div>

          {/* Cards + timeline line */}
          <div className="relative">
            <TimelineConnector />

            <motion.div
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isOpen={openId === product.id}
                  onToggle={onToggle}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ PM BRIDGE */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-28 py-24 bg-[#F0F2F8]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-4 block">
              Why Product Management
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight mb-6">
              I've been doing PM work for three years.{" "}
              <span className="text-[#2E6DB4]">Just without the title.</span>
            </h2>

            <p className="text-[15px] text-[#5A6B85] leading-relaxed mb-3">
              My day job at Changi Airport Group is airport operations — not software. But I kept seeing problems
              that software could solve, and nobody was building the solutions. So I did. The AI incident reporting
              tool wasn't assigned to me. I scoped the problem, architected the solution, got it deployed to{" "}
              <span className="font-semibold text-[#3D4F6A]">20,000 staff</span>, and tracked adoption after launch.
              That's PM work — I just didn't have the title or the permission.
            </p>
            <p className="text-[15px] text-[#1A2B4A] leading-relaxed">
              I don't write code. I understand architecture — databases, APIs, auth flows, deployment — and I use
              AI agents to build production software. {PRODUCTS.length} products shipped this way. The result: I can prototype and validate
              at the speed of thought. No waiting for engineering. No spec that sits in a backlog.
            </p>

            {/* Three pillars */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Search size={18} className="text-[#2E6DB4]" />,
                  title: "Discovery & Validation",
                  text: "I build Claude agent pipelines that automate ASO keyword research, SEO analysis, and competitor mapping. Before writing a line for RoxPacer, I validated demand, sized the market, and confirmed no competitor existed — all through automated research. For DayOne, I ran Reddit polls to understand how lifters actually search for apps.",
                },
                {
                  icon: <Code2 size={18} className="text-[#2E6DB4]" />,
                  title: "Technical Fluency",
                  text: "I understand architecture — databases, APIs, auth flows, deployment — but I don't hand-write code. I use AI agents to build production software. When I say a feature is feasible in two sprints, I know — because I've shipped it. My edge as a PM: I can build the prototype myself and automate research at scale.",
                },
                {
                  icon: <Package size={18} className="text-[#2E6DB4]" />,
                  title: "Scope Discipline",
                  text: `${PRODUCTS.length} products shipped. I scope to MVP and resist over-engineering. On FieldCheck, I pushed back on email auth — staff IDs were sufficient, and login friction would have killed adoption. That's the kind of call I make: cut what doesn't serve the user.`,
                },
              ].map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white border border-[#E2E6F0] shadow-sm rounded-2xl p-5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EBF2FA] flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <div className="text-sm font-semibold text-[#1A2B4A] mb-1.5">{title}</div>
                  <div className="text-[12px] text-[#5A6B85] leading-relaxed">{text}</div>
                </div>
              ))}
            </div>

            {/* What I'm looking for */}
            <div className="mt-8 pt-8 border-t border-[#E2E6F0]">
              <span className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-3 block">
                What I'm looking for
              </span>
              <p className="text-[15px] text-[#5A6B85] leading-relaxed">
                Associate PM or PM at a startup or scale-up in Singapore. Especially interested
                in govtech — Open Government Products is at the top of my list. I bring architectural
                fluency to talk to engineers as a peer, automated research workflows most PMs can't
                build, and enough scar tissue from {PRODUCTS.length} shipped products to know when to cut scope.{" "}
                <a
                  href="mailto:desmond@mouss.ac"
                  className="text-[#2E6DB4] hover:underline"
                >
                  Let's talk →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ FOOTER */}
      <footer className="px-6 md:px-12 lg:px-20 xl:px-28 py-12 border-t border-[#E2E6F0]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-base font-bold text-[#1A2B4A]">Desmond de Moussac</div>
              <div className="text-sm text-[#7A8BA5] mt-0.5">
                desmond@mouss.ac · Singapore
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-[#7A8BA5] hover:text-[#2E6DB4] transition-colors">Resume</a>
              <a href="https://www.linkedin.com/in/desmondddm" target="_blank" rel="noopener noreferrer" className="text-sm text-[#7A8BA5] hover:text-[#2E6DB4] transition-colors">LinkedIn</a>
              <a href="mailto:desmond@mouss.ac" className="text-sm text-[#7A8BA5] hover:text-[#2E6DB4] transition-colors">Email</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[#E2E6F0]">
            <p className="text-sm text-[#5A6B85] mb-5">
              {PRODUCTS.length} products shipped. Looking for the team that makes it {PRODUCTS.length + 1}.{" "}
              <a href="mailto:desmond@mouss.ac" className="text-[#2E6DB4] hover:underline">
                desmond@mouss.ac →
              </a>
            </p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#B0BAC9]">2026</p>
              <p className="text-xs text-[#B0BAC9]">desmondddm</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
