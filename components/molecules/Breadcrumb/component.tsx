import React from "react"
import { BreadcrumbItem } from "./interface"
import Link from "next/link"
import { cn } from "../../../utils/cn"

export const Breadcrumb:React.FC<BreadcrumbItem> = ({ items, className }) => {
  return (
    <div aria-label="Breadcrumb" className={cn("text-sm mb-4", className)}>
      <ol className="flex gap-2 flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="flex items-center">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-blue-600 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={isLast ? 'font-semibold' : ''}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="mx-2 text-gray-400">/</span>}
            </li>
          )
        })}
      </ol>
    </div>
  )
}