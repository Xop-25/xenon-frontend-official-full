import {
  ChatBubbleOvalLeftIcon,
  ClockIcon,
  CodeBracketIcon,
  BoltIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { cn } from "../lib/utils";
import { SidebarItem } from "./SidebarItem";
import { ProBadge } from "./ProBadge";
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="flex h-full flex-col space-y-4 border-r border-white/10 bg-background px-3 py-4 text-white">
      {/* Custom Logo */}
      <div className="flex items-center justify-center py-4">
        <img
          src="/xenon-logo.png"
          alt="XenonAI Logo"
          className="w-40 h-auto object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col space-y-1">
        <SidebarItem
          title="Chat"
          icon={ChatBubbleOvalLeftIcon}
          href="/"
        />
        <SidebarItem
          title="History"
          icon={ClockIcon}
          href="/history"
        />
        <SidebarItem
          title="Codex"
          icon={CodeBracketIcon}
          href="/codex"
        />
        <SidebarItem
          title="Beyond AI"
          icon={BoltIcon}
          href="/pro"
          endElement={<ProBadge />}
        />
        <SidebarItem
          title="Settings"
          icon={Cog6ToothIcon}
          href="/settings"
        />
      </div>

      <div className="mt-auto flex items-center text-sm text-muted-foreground">
        <span className="text-white/60">💡 Light Mode</span>
      </div>
    </div>
  );
}
