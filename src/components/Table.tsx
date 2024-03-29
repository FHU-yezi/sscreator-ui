import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type { SemanticColorType, UnsetColorType } from "../types/colorTypes";
import HorizontalScoll from "./layout/HorizontalScoll";

function getTableElementColor(color?: UnsetColorType | SemanticColorType) {
  return {
    "bg-green-100 text-green-700 dark:(bg-green-950 text-green-600)":
      color === "success",
    "bg-blue-100 text-blue-600 dark:(bg-blue-950 text-blue-500)":
      color === "info",
    "bg-orange-100 text-orange-700 dark:(bg-orange-950 text-orange-600)":
      color === "warning",
    "bg-red-100 text-red-600 dark:(bg-red-950 text-red-500)":
      color === "danger",
  };
}

interface TableItemProps<T extends HTMLElement> extends HTMLAttributes<T> {
  children: ComponentChildren;
  className?: string;
  color?: UnsetColorType | SemanticColorType;
}

export function TableHead({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableCellElement>) {
  return (
    <th
      className={clsx(
        "px-2 py-1 font-semibold border border-zinc-300 dark:border-zinc-700 whitespace-nowrap",
        className,
        getTableElementColor(color),
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableCellElement>) {
  return (
    <td
      className={clsx(
        "px-2 py-1 border border-zinc-300 dark:border-zinc-700",
        className,
        getTableElementColor(color),
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export function TableRow({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableRowElement>) {
  return (
    <tr className={clsx(className, getTableElementColor(color))} {...props}>
      {children}
    </tr>
  );
}

export function TableHeader({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableSectionElement>) {
  return (
    <thead className={clsx(className, getTableElementColor(color))} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableSectionElement>) {
  return (
    <tbody className={clsx(className, getTableElementColor(color))} {...props}>
      {children}
    </tbody>
  );
}

export function TableFooter({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableSectionElement>) {
  return (
    <tfoot
      className={clsx("font-semibold", className, getTableElementColor(color))}
      {...props}
    >
      {children}
    </tfoot>
  );
}

export function Table({
  children,
  className,
  color,
  ...props
}: TableItemProps<HTMLTableElement>) {
  return (
    <HorizontalScoll>
      <table
        className={clsx(
          className,
          {
            "text-zinc-950 dark:text-zinc-50": color === undefined,
          },
          getTableElementColor(color),
        )}
        {...props}
      >
        {children}
      </table>
    </HorizontalScoll>
  );
}
