import clsx from "clsx";
import type { ComponentChildren } from "preact";
import Center from "./layout/Center";
import HorizontalScoll from "./layout/HorizontalScoll";

interface TableHeaderProps {
  children: ComponentChildren[];
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export function TableHeader({
  children,
  className,
  backgroundColor = "bg-zinc-50 dark:bg-zinc-900",
  borderColor = "border-zinc-200 dark:border-zinc-700",
}: TableHeaderProps) {
  return (
    <thead className={clsx(className, backgroundColor)}>
      <tr>
        {children.map((item) => (
          <th className={clsx("border px-2 py-1.5", borderColor)}>
            <Center>{item}</Center>
          </th>
        ))}
      </tr>
    </thead>
  );
}

interface TableRowProps {
  children: ComponentChildren[];
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
}

export function TableRow({
  children,
  className,
  backgroundColor = "",
  borderColor = "border-zinc-200 dark:border-zinc-700",
}: TableRowProps) {
  return (
    <tr className={className}>
      {children.map((item) => (
        <td
          className={clsx("px-2 py-1.5 border", backgroundColor, borderColor)}
        >
          {item}
        </td>
      ))}
    </tr>
  );
}

interface TableBodyProps {
  children: ComponentChildren;
  className?: string;
}

export function TableBody({ children, className }: TableBodyProps) {
  return <tbody className={className}>{children}</tbody>;
}

interface TableProps {
  children: ComponentChildren;
  className?: string;
  borderColor?: string;
  isHorizontalScollable?: boolean;
}

export function Table({
  children,
  className,
  borderColor = "border-zinc-200 dark:border-zinc-700",
  isHorizontalScollable = true,
}: TableProps) {
  if (isHorizontalScollable) {
    return (
      <HorizontalScoll>
        <table className={clsx(className, "border", borderColor)}>
          {children}
        </table>
      </HorizontalScoll>
    );
  }

  return (
    <table className={clsx(className, "border", borderColor)}>{children}</table>
  );
}
