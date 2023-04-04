"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { Hash } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {
  href: string
  channelName: string | null
}

export const ChannelLink: React.FC<Props> = ({ href, channelName }) => {
  const isActive = channelName === useSelectedLayoutSegment()

  return (
    <Link href={href}>
      <Button
        variant={isActive ? "subtle" : "ghost"}
        size="sm"
        className="w-full justify-start font-normal"
      >
        <Hash className="mr-2 h-4 w-4" />
        {channelName}
      </Button>
    </Link>
  )
}
