import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ExternalLink, Search, Code2, Package, Mail } from "lucide-react"
import { PRODUCTS } from "./data/products"
import { StatBadge } from "./components/StatBadge"

// ── PM Portfolio Page ─────────────────────────────────────────────────────────

const FEATURED_IDS = [8, 6, 5] // FieldCheck, RoxPacer, DayOne
const COMPACT_IDS = [2, 3, 7, 9] // CoachConnect, Stenify, Beacon, MrWhite

export default function App() {
  const [expandedId, setExpandedId] = useState(null)
  const toggle = (id) => setExpandedId(expandedId === id ? null : id)

  const featuredProducts = FEATURED_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)
  const compactProducts = COMPACT_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean)

  return (
    <div className="min-h-screen bg-[#F7F8FC] text-[#1A2B4A]" style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>

      <FloatingCTA />

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
                Desmond de Moussac · Product Management · Singapore
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] leading-[1.08] mb-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                I shipped an AI tool to 20,000 users at Changi Airport.{" "}
                <span className="text-[#2E6DB4]">Nobody asked me to.</span>
              </motion.h1>

              <motion.p
                className="text-base text-[#5A6B85] max-w-2xl leading-relaxed mb-4"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
              >
                I scope problems, architect solutions, and ship production software using AI agents.{" "}
                <span className="font-semibold text-[#3D4F6A]">{PRODUCTS.length} products shipped solo</span>
                {" "}— a paid client system, two iOS App Store apps, and an enterprise AI tool among them.
                Each one forced a different product decision. Those decisions are the story.
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
                  href="#case-study"
                  className="px-6 py-3 bg-[#EBF2FA] hover:bg-[#2E6DB4] text-[#2E6DB4] hover:text-white rounded-xl font-medium transition-colors duration-200 text-sm"
                >
                  See the proof ↓
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
            <StatBadge n="7+" label="Years in Airport Ops" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ CAG DEEP DIVE */}
      <section id="case-study" className="px-6 md:px-12 lg:px-20 xl:px-28 py-24 bg-[#1A2B4A]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-mono text-[#7FB0E0] tracking-[0.2em] uppercase mb-4 block">
              Case Study · Changi Airport Group
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              20,000 users.{" "}
              <span className="text-[#7FB0E0]">From a problem I saw on the ground.</span>
            </h2>

            <div className="space-y-6 text-[15px] text-[#B8C5D9] leading-relaxed">
              <div>
                <div className="text-[11px] font-mono text-[#7FB0E0] tracking-[0.15em] uppercase mb-2">The problem</div>
                <p className="m-0">
                  My portfolio at CAG included security promotion. Ground officers constantly asked the same question: does this bag count as unattended? The policy was clear on paper, but in practice — different sizes, different contexts, different lighting — officers made inconsistent calls. In a safety-critical environment, inconsistency is a risk.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#7FB0E0] tracking-[0.15em] uppercase mb-2">The product decision</div>
                <p className="m-0">
                  I knew from ground experience that the core issue was size-based judgement. AI could solve this — point a camera at a bag, get a consistent answer. I scoped the tool, architected the solution with Google Gemini's computer vision, and built it. The hardest part wasn't the technology. It was training the model against our ground knowledge: dozens of edge cases, each tested through trial and error until accuracy was reliable.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#7FB0E0] tracking-[0.15em] uppercase mb-2">Stakeholder alignment & launch</div>
                <p className="m-0">
                  Once I could prove accuracy to my EVP, there was little resistance. We held a launch event with stakeholders to drive initial adoption. But launch wasn't the finish line — it was the start of a sustained engagement effort.
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#7FB0E0] tracking-[0.15em] uppercase mb-2">Post-launch metrics & engagement</div>
                <p className="m-0">
                  We tracked adoption rates, usage frequency, and whether reported incidents were genuine — the core success metric. To sustain engagement, I ran monthly quiz campaigns with vouchers. The tool is now in production use by 20,000+ Changi Airport staff.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "20k+", label: "Staff deployed to" },
                { n: "Monthly", label: "Engagement campaigns" },
                { n: "Solo", label: "Scoped, built, launched" },
              ].map(({ n, label }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#7FB0E0]">{n}</div>
                  <div className="text-xs text-[#8B9BB5] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ PRODUCT GRID */}
      <section id="products" className="px-6 md:px-12 lg:px-20 xl:px-28 py-24">
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-3 block">
              What I've Shipped
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] mb-3">
              {PRODUCTS.length} products. Each one taught me something different.
            </h2>
            <p className="text-sm text-[#7A8BA5]">
              Click any card for the problem, the solution, and the lesson.
            </p>
          </motion.div>

          {/* Featured row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {featuredProducts.map((product) => (
              <FeaturedPMCard
                key={product.id}
                product={product}
                isOpen={expandedId === product.id}
                onToggle={() => toggle(product.id)}
              />
            ))}
          </div>

          {/* Compact row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {compactProducts.map((product) => (
              <CompactPMCard
                key={product.id}
                product={product}
                isOpen={expandedId === product.id}
                onToggle={() => toggle(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ HOW I WORK / AIOS */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-28 py-24 bg-[#F0F2F8] border-t border-[#E2E6F0]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-4 block">
              How I Ship This Much
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight mb-6">
              One person.{" "}
              <span className="text-[#2E6DB4]">The output of an entire product org.</span>
            </h2>

            <p className="text-[15px] text-[#5A6B85] leading-relaxed mb-8">
              Most product teams need separate people for research, competitive analysis, design, content, and quality oversight. I built an AI operating system that does the work of those teams — with me as the only human in the loop. This is the kind of AI-native workflow I'd bring to your product org.
            </p>

            {/* The comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-[#E2E6F0] rounded-2xl p-5">
                <div className="text-[11px] font-mono text-[#7A8BA5] tracking-[0.15em] uppercase mb-4">Traditional Product Operation</div>
                <div className="space-y-2.5">
                  {[
                    "Market Researcher — sizing, trends, opportunity mapping",
                    "Competitive Analyst — feature gaps, positioning",
                    "Product Designer — brand, prototypes, visual identity",
                    "Content Marketer — blogs, social, launch copy",
                    "SEO Specialist — keywords, audits, content briefs",
                    "Sales / Outreach — prospecting, personalised sequences",
                    "QA Reviewer — quality checks across all outputs",
                  ].map((role) => (
                    <div key={role} className="text-[12px] text-[#5A6B85] flex items-start gap-2">
                      <span className="text-[#B0BAC9] mt-0.5">+</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2E6F0]">
                  <div className="text-[13px] font-semibold text-[#7A8BA5]">7+ people · weeks to months</div>
                </div>
              </div>

              <div className="bg-[#EBF2FA] border border-[#2E6DB4]/20 rounded-2xl p-5">
                <div className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.15em] uppercase mb-4">My AI Operating System</div>
                <div className="space-y-2.5">
                  {[
                    { team: "Idea Validation", desc: "automated keyword research, competitor mining, revenue modelling" },
                    { team: "Design Studio", desc: "brand specs, prototypes, visual identity, interaction flows" },
                    { team: "Content Studio", desc: "editorial calendar, long-form, short-form, video scripts" },
                    { team: "SEO & Growth", desc: "technical audits, topic clusters, content briefs, rank tracking" },
                    { team: "Sales Outreach", desc: "prospect scraping, deep research, personalised email sequences" },
                    { team: "Social Marketing", desc: "trend scouting, platform-native content, community engagement" },
                    { team: "Quality Oversight", desc: "audits all team outputs, flags issues, recommends improvements" },
                  ].map(({ team, desc }) => (
                    <div key={team} className="text-[12px] flex items-start gap-2">
                      <span className="text-[#2E6DB4] mt-0.5 font-bold">→</span>
                      <span><span className="font-semibold text-[#1A2B4A]">{team}</span> <span className="text-[#5A6B85]">— {desc}</span></span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#2E6DB4]/20">
                  <div className="text-[13px] font-semibold text-[#2E6DB4]">1 person · 50+ agents · days not weeks</div>
                </div>
              </div>
            </div>

            {/* Proof: real scenario */}
            <div className="bg-white border border-[#E2E6F0] rounded-2xl p-5">
              <div className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.15em] uppercase mb-3">Real Example — Product Validation Pipeline</div>
              <p className="text-[13px] text-[#5A6B85] leading-relaxed mb-4 m-0">
                I started with an idea for a Hyrox coaching app. Instead of building it, I ran the validation pipeline. Here's what the system did — and what it would traditionally require:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[
                    { agent: "ASO-Researcher", did: "Ran automated keyword research across App Store — found the coaching niche was saturated" },
                    { agent: "Competitor-Intel", did: "Mined top 10 competitor reviews, extracted feature gaps and pricing" },
                    { agent: "Indie-Vetter", did: "Modelled revenue potential — coaching didn't hit the $3-10k MRR threshold" },
                    { agent: "Product-Scoper", did: "Found the real gap: no dedicated pacing app for Hyrox. Pivoted the spec." },
                  ].map(({ agent, did }) => (
                    <div key={agent} className="text-[12px]">
                      <span className="font-mono text-[#2E6DB4] font-semibold">{agent}</span>
                      <span className="text-[#5A6B85]"> — {did}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F7F8FC] border border-[#E2E6F0] rounded-xl p-4 flex flex-col justify-center">
                  <div className="text-[13px] text-[#5A6B85] leading-relaxed">
                    <span className="font-semibold text-[#1A2B4A]">Result:</span> Killed the original idea. Pivoted to RoxPacer. The pipeline produced a complete product spec, brand brief, and go-to-market strategy — all before writing a single line of code.
                  </div>
                  <div className="mt-3 text-[11px] text-[#7A8BA5]">
                    Traditionally: 1 researcher + 1 analyst + 1 PM · 2-3 weeks.
                    <br />
                    With the system: 4 agents · hours.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ PM BRIDGE */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-28 py-24 bg-white border-t border-[#E2E6F0]">
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
              I understand architecture — databases, APIs, auth flows, deployment — and I use
              AI agents (Claude Code, Cursor, Lovable) to build production software. {PRODUCTS.length} products shipped this way. The result: I can prototype and validate
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
                  className="bg-[#F7F8FC] border border-[#E2E6F0] shadow-sm rounded-2xl p-5"
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
                PM roles in Singapore where individual product decisions still have real weight —
                especially AI products, digital transformation, or 0-to-1 builds. I bring architectural
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

      {/* ══════════════════════════════════════════════ BACKGROUND */}
      <section className="px-6 md:px-12 lg:px-20 xl:px-28 py-16 border-t border-[#E2E6F0]">
        <div className="max-w-3xl mx-auto">
          <span className="text-[11px] font-mono text-[#2E6DB4] tracking-[0.2em] uppercase mb-6 block">
            Background
          </span>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <div className="text-sm font-semibold text-[#1A2B4A]">Implementation Manager (Airport Operations)</div>
                <div className="text-sm text-[#5A6B85]">Changi Airport Group</div>
              </div>
              <div className="text-xs text-[#7A8BA5] font-mono">2022 – present</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <div className="text-sm font-semibold text-[#1A2B4A]">Airport Operations</div>
                <div className="text-sm text-[#5A6B85]">Certis — government-linked security environment</div>
              </div>
              <div className="text-xs text-[#7A8BA5] font-mono">2019 – 2022</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <div className="text-sm font-semibold text-[#1A2B4A]">B.Eng Aeronautical Engineering</div>
                <div className="text-sm text-[#5A6B85]">Embry-Riddle Aeronautical University</div>
              </div>
              <div className="text-xs text-[#7A8BA5] font-mono">2018</div>
            </div>
          </div>
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

// ── Floating CTA ──────────────────────────────────────────────────────────────

function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="mailto:desmond@mouss.ac"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#2E6DB4] hover:bg-[#245A9A] text-white rounded-full font-medium text-sm shadow-lg transition-colors duration-200"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
        >
          <Mail size={16} />
          Get in touch
        </motion.a>
      )}
    </AnimatePresence>
  )
}

// ── Featured PM Card ──────────────────────────────────────────────────────────

function FeaturedPMCard({ product, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="bg-white border-2 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md shadow-sm cursor-pointer h-full"
        style={{ borderColor: isOpen ? product.accent : "#E2E6F0" }}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
      >
        <div className="p-5">
          {/* Meta */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono text-[#7A8BA5]">{product.year}</span>
            <span className="text-[#B0BAC9]">·</span>
            <span className="text-[11px] text-[#7A8BA5]">{product.role}</span>
          </div>

          {/* Name + tagline */}
          <h3 className="text-lg font-bold text-[#1A2B4A] leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-[13px] text-[#5A6B85] mb-3 leading-relaxed">{product.tagline}</p>

          {/* Metrics — always visible */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[product.metric, product.metric2].filter(Boolean).map(({ value, label }) => (
              <div key={label} className="bg-[#F7F8FC] border border-[#E2E6F0] rounded-xl p-3 text-center">
                <div className="text-xl font-bold" style={{ color: product.accent }}>{value}</div>
                <div className="text-[10px] text-[#7A8BA5] mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[11px] border rounded-md px-2 py-0.5 ${product.statusColor}`}>
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

          {/* Lesson punchline — always visible */}
          <div className="pt-3 border-t border-[#E2E6F0] flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#7A8BA5] uppercase tracking-widest mb-1">{product.wallLabel}</div>
              <p className="text-[13px] text-[#1A2B4A] italic leading-relaxed m-0">"{product.lesson}"</p>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#2E6DB4] flex-shrink-0 mt-1"
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#E2E6F0] px-5 pb-5 pt-4 space-y-4">
                <div className="bg-[#E8F5EE] border border-[#1A8754]/25 rounded-xl p-3">
                  <span className="text-[10px] font-bold text-[#1A8754] uppercase tracking-widest">Outcome</span>
                  <p className="text-sm text-[#1A2B4A] mt-1.5 leading-relaxed m-0">{product.outcome}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#C0392B] uppercase tracking-widest">The Problem</span>
                  <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed m-0">{product.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#1A8754] uppercase tracking-widest">The Solution</span>
                  <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed m-0">{product.solution}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#7A8BA5] uppercase tracking-widest">The Lesson — {product.wallLabel}</span>
                  <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed m-0">{product.wall}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

// ── Compact PM Card ───────────────────────────────────────────────────────────

function CompactPMCard({ product, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="bg-white border border-[#E2E6F0] rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#2E6DB4]/40 hover:shadow-md shadow-sm cursor-pointer"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle()}
      >
        <div className="p-5">
          {/* Meta */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono text-[#7A8BA5]">{product.year}</span>
            <span className="text-[#B0BAC9]">·</span>
            <span className="text-[11px] text-[#7A8BA5]">{product.role}</span>
          </div>

          {/* Name + tagline */}
          <h3 className="text-lg font-bold text-[#1A2B4A] leading-tight mb-1">
            {product.name}
          </h3>
          <p className="text-[13px] text-[#5A6B85] mb-3 leading-relaxed">{product.tagline}</p>

          {/* Status */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[11px] border rounded-md px-2 py-0.5 ${product.statusColor}`}>
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

          {/* Lesson punchline — always visible */}
          <div className="pt-3 border-t border-[#E2E6F0] flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-[#7A8BA5] uppercase tracking-widest mb-1">{product.wallLabel}</div>
              <p className="text-[13px] text-[#1A2B4A] italic leading-relaxed m-0">"{product.lesson}"</p>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#2E6DB4] flex-shrink-0 mt-1"
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </div>

        {/* Expanded detail */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#E2E6F0] px-5 pb-5 pt-4 space-y-4">
                <div className="bg-[#E8F5EE] border border-[#1A8754]/25 rounded-xl p-3">
                  <span className="text-[10px] font-bold text-[#1A8754] uppercase tracking-widest">Outcome</span>
                  <p className="text-sm text-[#1A2B4A] mt-1.5 leading-relaxed m-0">{product.outcome}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#C0392B] uppercase tracking-widest">The Problem</span>
                  <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed m-0">{product.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#1A8754] uppercase tracking-widest">The Solution</span>
                  <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed m-0">{product.solution}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#7A8BA5] uppercase tracking-widest">The Lesson — {product.wallLabel}</span>
                  <p className="text-sm text-[#5A6B85] mt-1.5 leading-relaxed m-0">{product.wall}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
