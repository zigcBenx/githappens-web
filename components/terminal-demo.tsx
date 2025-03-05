"use client"

import { useEffect, useState, useRef } from "react"
import { Loader2 } from "lucide-react"

interface TerminalDemoProps {
  command: string
  autoStart?: boolean
}

export default function TerminalDemo({ command, autoStart = false }: TerminalDemoProps) {
  const [isTyping, setIsTyping] = useState(false)
  const [typedCommand, setTypedCommand] = useState("")
  const [showOutput, setShowOutput] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [output, setOutput] = useState<string[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  const startTyping = () => {
    if (isTyping) return

    setIsTyping(true)
    setTypedCommand("")
    setShowOutput(false)
    setOutput([])

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < command.length) {
        setTypedCommand(command.substring(0, i + 1)) // Fixed: Use substring instead of adding characters
        i++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
        setIsLoading(true)

        setTimeout(() => {
          setIsLoading(false)
          setShowOutput(true)
          generateOutput()
        }, 1000)
      }
    }, 50)
  }

  useEffect(() => {
    if (autoStart) {
      startTyping()
    }
  }, [autoStart]) // Removed startTyping from dependencies

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  })

  const generateOutput = () => {
    if (command.includes("feat(HR): Create salary export")) {
      setOutput([
        '✓ Creating issue "feat(HR): Create salary export"',
        "✓ Issue #1234 created successfully",
        "✓ Creating branch feat/hr-create-salary-export",
        "✓ Branch created and checked out",
        "✓ Ready to start working on your feature!",
      ])
    } else if (command.includes("--no-epic")) {
      setOutput([
        '✓ Creating issue "fix(HR): Remove useless button"',
        "✓ Skipping epic assignment",
        "✓ Issue #1235 created successfully",
        "✓ Creating branch fix/hr-remove-useless-button",
        "✓ Branch created and checked out",
      ])
    } else if (command.includes("review")) {
      setOutput([
        "Select reviewers for merge request #1234:",
        "  ◉ John Doe (john.doe)",
        "  ◉ Jane Smith (jane.smith)",
        "  ◯ Alex Johnson (alex.j)",
        "",
        "✓ Added 2 reviewers to merge request #1234",
      ])
    } else if (command.includes("open")) {
      setOutput(["✓ Opening merge request #1234 in browser", "✓ Browser launched successfully"])
    } else {
      setOutput(["✓ Command executed successfully"])
    }
  }

  return (
    <div
      ref={terminalRef}
      className="font-mono text-sm bg-zinc-950 rounded-lg p-4 h-[300px] overflow-y-auto"
      onClick={startTyping}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="text-zinc-500 text-xs ml-2">Terminal</span>
      </div>

      <div className="text-zinc-300">
        <span className="text-emerald-400">➜</span> <span className="text-blue-400">~/projects/my-app</span>{" "}
        <span className="text-zinc-500">(main)</span> $ {typedCommand}
        {isTyping && <span className="animate-pulse">|</span>}
      </div>

      {isLoading && (
        <div className="flex items-center gap-2 text-zinc-400 mt-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Processing...</span>
        </div>
      )}

      {showOutput && (
        <div className="mt-2 space-y-1">
          {output.map((line, index) => (
            <div key={index} className={line.includes("✓") ? "text-emerald-400" : "text-zinc-300"}>
              {line}
            </div>
          ))}
        </div>
      )}

      {!isTyping && !isLoading && !showOutput && (
        <div className="text-zinc-300 mt-2">
          <span className="text-zinc-500"># Click to run the command</span>
          <div className="mt-1">
            <span className="text-emerald-400">➜</span> <span className="text-blue-400">~/projects/my-app</span>{" "}
            <span className="text-zinc-500">(main)</span> $ <span className="animate-pulse">|</span>
          </div>
        </div>
      )}
    </div>
  )
}

