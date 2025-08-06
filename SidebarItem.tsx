import React from "react";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  endElement?: React.ReactNode;
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function SidebarItem({
  icon: Icon,
  label,
  isActive,
  endElement,
}: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition duration-200",
        isActive
          ? "bg-zinc-800 text-white dark:bg-white/10"
          : "bg-zinc-100 hover:bg-zinc-200 text-black dark:bg-transparent dark:hover:bg-white/10 dark:text-white"
      )}
    >
      <div className="flex items-center gap-x-2">
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </div>
      {endElement}
    </div>
  );
}
