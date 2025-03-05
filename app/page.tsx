"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Terminal,
  Github,
  ArrowRight,
  Code,
  GitBranch,
  GitPullRequest,
  Check,
  Command,
  ExternalLink,
} from "lucide-react"
import TerminalDemo from "@/components/terminal-demo"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function LandingPage() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault()
      const targetId = (e.target as HTMLAnchorElement).getAttribute("href")
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll as EventListener)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll as EventListener)
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">GitHappens</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
              Features
            </Link>
            <Link href="#usage" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
              Usage
            </Link>
            <Link href="#installation" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
              Installation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/zigcBenx/githappens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
            <Button
              variant="default"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => scrollToSection("installation")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-zinc-800"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_750px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20">
                    Open Source
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Git happens. <span className="text-emerald-500">Deal with it.</span>
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    A lightning-fast CLI tool for creating issues, branches, and merge requests directly from your
                    terminal. Streamline your Git workflow and save precious developer time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => scrollToSection("installation")}
                  >
                    Install Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="https://github.com/zigcBenx/githappens" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 border-zinc-700 bg-zinc-800/40 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-50"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Star on GitHub
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 lg:p-4 backdrop-blur-sm">
                <TerminalDemo command='gh "feat(HR): Create salary export"' autoStart={true} />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to streamline your Git workflow
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-start p-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-emerald-500/10">
                  <Code className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Quick Issue Creation</h3>
                <p className="text-zinc-400">
                  Create issues directly from your terminal with a simple command. No more context switching to your
                  browser.
                </p>
                <div className="mt-auto pt-4">
                  <code className="px-2 py-1 rounded bg-zinc-800 text-sm text-emerald-400 font-mono">
                    gh "feat(HR): Create salary export"
                  </code>
                </div>
              </div>
              <div className="flex flex-col items-start p-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-emerald-500/10">
                  <GitBranch className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Automatic Branch Creation</h3>
                <p className="text-zinc-400">
                  Automatically creates a branch linked to your issue with the proper naming convention.
                </p>
                <div className="mt-auto pt-4">
                  <code className="px-2 py-1 rounded bg-zinc-800 text-sm text-emerald-400 font-mono">
                    # Creates branch: feat/hr-create-salary-export
                  </code>
                </div>
              </div>
              <div className="flex flex-col items-start p-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-emerald-500/10">
                  <GitPullRequest className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Merge Request Integration</h3>
                <p className="text-zinc-400">
                  Create merge requests linked to your issues and open them in your browser with a single command.
                </p>
                <div className="mt-auto pt-4">
                  <code className="px-2 py-1 rounded bg-zinc-800 text-sm text-emerald-400 font-mono">gh open</code>
                </div>
              </div>
              <div className="flex flex-col items-start p-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-emerald-500/10">
                  <Check className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Review Management</h3>
                <p className="text-zinc-400">
                  Set approvers for your merge requests directly from the terminal. Streamline the review process.
                </p>
                <div className="mt-auto pt-4">
                  <code className="px-2 py-1 rounded bg-zinc-800 text-sm text-emerald-400 font-mono">gh review</code>
                </div>
              </div>
              <div className="flex flex-col items-start p-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-emerald-500/10">
                  <Command className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Flexible Options</h3>
                <p className="text-zinc-400">
                  Customize your workflow with options for epics, iterations, and more. Use flags to tailor the
                  behavior.
                </p>
                <div className="mt-auto pt-4">
                  <code className="px-2 py-1 rounded bg-zinc-800 text-sm text-emerald-400 font-mono">
                    gh "fix(HR): Remove button" --no-epic
                  </code>
                </div>
              </div>
              <div className="flex flex-col items-start p-6 space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                <div className="p-2 rounded-full bg-emerald-500/10">
                  <ExternalLink className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Browser Integration</h3>
                <p className="text-zinc-400">
                  Open merge requests in your browser when needed, but stay in the terminal for everything else.
                </p>
                <div className="mt-auto pt-4">
                  <code className="px-2 py-1 rounded bg-zinc-800 text-sm text-emerald-400 font-mono">gh open</code>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Usage Examples Section */}
        <section id="usage" className="w-full py-12 md:py-24 lg:py-32 border-b border-zinc-800">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple commands, powerful workflow
                </p>
              </div>
            </motion.div>

            <div className="mt-12 space-y-12">
              <UsageExample
                title="Create an Issue with Branch"
                description="Create a new issue and branch in one command. GitHappens automatically formats the branch name according to your team's conventions."
                command='gh "feat(HR): Create salary export"'
                output='Creates an issue titled "feat(HR): Create salary export" and a branch named "feat/hr-create-salary-export"'
              />
              <UsageExample
                title="Skip Epic Assignment"
                description="Need to create a quick fix without assigning to an epic? Use the --no-epic flag to skip the epic selection."
                command='gh "fix(HR): Remove useless button" --no-epic'
                output="Creates an issue without prompting for epic selection"
                reverse
              />
              <UsageExample
                title="Set Reviewers"
                description="Assign reviewers to your merge request directly from the terminal. No more clicking through the UI."
                command="gh review"
                output="Opens an interactive prompt to select reviewers for your merge request"
              />
              <UsageExample
                title="Open in Browser"
                description="Need to check something in the UI? Quickly open your merge request in the browser."
                command="gh open"
                output="Opens the current merge request in your default browser"
                reverse
              />
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          id="installation"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started in Seconds</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Install GitHappens and start streamlining your workflow
                </p>
              </div>
            </div>

            <div className="mt-12 mx-auto max-w-3xl">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm space-y-6">
                <h3 className="text-xl font-bold">Installation</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Using npm</h4>
                    <code className="px-3 py-2 rounded bg-zinc-800 text-sm text-emerald-400 font-mono block">
                      npm install -g githappens
                    </code>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Using yarn</h4>
                    <code className="px-3 py-2 rounded bg-zinc-800 text-sm text-emerald-400 font-mono block">
                      yarn global add githappens
                    </code>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Using pnpm</h4>
                    <code className="px-3 py-2 rounded bg-zinc-800 text-sm text-emerald-400 font-mono block">
                      pnpm add -g githappens
                    </code>
                  </div>
                </div>

                <h3 className="text-xl font-bold pt-4">Configuration</h3>
                <div className="space-y-2">
                  <p className="text-zinc-400">Set up your GitHappens configuration with a simple command:</p>
                  <code className="px-3 py-2 rounded bg-zinc-800 text-sm text-emerald-400 font-mono block">
                    gh config
                  </code>
                  <p className="text-sm text-zinc-500">
                    This will guide you through setting up your GitLab/GitHub token and preferences.
                  </p>
                </div>

                <div className="pt-4">
                  <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                    View Full Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Streamline Your Git Workflow?
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join developers who are saving time and staying in the flow with GitHappens
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => scrollToSection("installation")}
                >
                  Install Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="https://github.com/zigcBenx/githappens" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 border-zinc-700 bg-zinc-800/40 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-50"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800 bg-zinc-950 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-emerald-500" />
            <span className="text-lg font-semibold">GitHappens</span>
          </div>
          <p className="text-center text-sm text-zinc-500 md:text-left">
            &copy; {new Date().getFullYear()} GitHappens. Open source under MIT License.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/zigcBenx/githappens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function UsageExample({ title, description, command, output, reverse = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
    >
      <div className={`space-y-4 ${reverse ? "lg:order-last" : ""}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-zinc-400">{description}</p>
        <div className="space-y-2">
          <code className="px-3 py-2 rounded bg-zinc-800 text-sm text-emerald-400 font-mono block">{command}</code>
          <p className="text-sm text-zinc-500">{output}</p>
        </div>
      </div>
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2 lg:p-4 backdrop-blur-sm">
        <TerminalDemo command={command} autoStart={isInView} />
      </div>
    </motion.div>
  )
}

