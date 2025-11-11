import {HTMLAttributes} from "react";
export interface BreadcrumbItem extends HTMLAttributes<HTMLAnchorElement> {
  items: { label: string; href?: string }[]
}