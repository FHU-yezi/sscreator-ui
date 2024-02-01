import clsx from "clsx";
import type { ComponentChildren } from "preact";
import type { HTMLAttributes } from "preact/compat";
import type {
  SemanticColorType,
  UnsetColorType,
} from "../../utils/colorSchemeTypes";
import HorizontalScoll from "../layout/HorizontalScoll";

interface TableItemProps<T extends HTMLElement> extends HTMLAttributes<T> {
  children: ComponentChildren;
  className?: string;
  colorScheme?: UnsetColorType | SemanticColorType;
}

export function TableHead({
  children,
  className,
  colorScheme,
  ...props
}: TableItemProps<HTMLTableCellElement>) {
  return (
    <th
      className={clsx(
        "px-2 py-1 font-semibold border border-zinc-300 dark:border-zinc-700 whitespace-nowrap",
        className,
        {
          "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
            colorScheme === "success",
          "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
            colorScheme === "info",
          "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
            colorScheme === "warning",
          "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
            colorScheme === "danger",
        },
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
  colorScheme,
  ...props
}: TableItemProps<HTMLTableCellElement>) {
  return (
    <td
      className={clsx(
        "px-2 py-1 border border-zinc-300 dark:border-zinc-700",
        className,
        {
          "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
            colorScheme === "success",
          "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
            colorScheme === "info",
          "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
            colorScheme === "warning",
          "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
            colorScheme === "danger",
        },
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
  colorScheme,
  ...props
}: TableItemProps<HTMLTableRowElement>) {
  return (
    <tr
      className={clsx(className, {
        "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
          colorScheme === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
          colorScheme === "warning",
        "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
          colorScheme === "danger",
      })}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHeader({
  children,
  className,
  colorScheme,
  ...props
}: TableItemProps<HTMLTableSectionElement>) {
  return (
    <thead
      className={clsx(className, {
        "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
          colorScheme === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
          colorScheme === "warning",
        "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
          colorScheme === "danger",
      })}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({
  children,
  className,
  colorScheme,
  ...props
}: TableItemProps<HTMLTableSectionElement>) {
  return (
    <tbody
      className={clsx(className, {
        "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
          colorScheme === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
          colorScheme === "warning",
        "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
          colorScheme === "danger",
      })}
      {...props}
    >
      {children}
    </tbody>
  );
}

export function TableFooter({
  children,
  className,
  colorScheme,
  ...props
}: TableItemProps<HTMLTableSectionElement>) {
  return (
    <tfoot
      className={clsx("font-semibold", className, {
        "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
          colorScheme === "success",
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
          colorScheme === "info",
        "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
          colorScheme === "warning",
        "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
          colorScheme === "danger",
      })}
      {...props}
    >
      {children}
    </tfoot>
  );
}

export function Table({
  children,
  className,
  colorScheme,
  ...props
}: TableItemProps<HTMLTableElement>) {
  return (
    <HorizontalScoll>
      <table
        className={clsx(className, {
          "text-zinc-950 dark:text-zinc-50": colorScheme === undefined,
          "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300":
            colorScheme === "success",
          "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300":
            colorScheme === "info",
          "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300":
            colorScheme === "warning",
          "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300":
            colorScheme === "danger",
        })}
        {...props}
      >
        {children}
      </table>
    </HorizontalScoll>
  );
}
