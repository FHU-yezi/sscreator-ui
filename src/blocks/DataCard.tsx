import clsx from "clsx";
import { MdTrendingDown, MdTrendingFlat, MdTrendingUp } from "react-icons/md";
import Card from "../components/Card";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import Icon from "../components/typography/Icon";
import Text from "../components/typography/Text";

interface Props {
  className?: string;
  name: string;
  value: string | number;
  description?: string;
  trendValue?: string | number;
  trendType?: "up" | "down" | "flat";
  borderless?: boolean;
}

export default function DataCard({
  className,
  name,
  value,
  description,
  trendValue,
  trendType,
  borderless = false,
}: Props) {
  return (
    <Card className={className} padding="px-4 py-3" borderless={borderless}>
      <Column gap="gap-1">
        <Text>{name}</Text>

        <Row gap="gap-2" className="items-center">
          <Text className="text-xl" bold>
            {value}
          </Text>

          {trendType && trendValue && (
            <Text
              small
              nowrap
              color={clsx("rounded-md px-2 py-0.5", {
                "text-red-500 bg-red-100 dark:bg-red-950": trendType === "up",
                "text-green-500 bg-green-100 dark:bg-green-950":
                  trendType === "down",
                "text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800":
                  trendType === "flat",
              })}
            >
              {trendValue}

              {trendType === "up" && (
                <Icon className="ml-1">
                  <MdTrendingUp size={18} />
                </Icon>
              )}
              {trendType === "down" && (
                <Icon className="ml-1">
                  <MdTrendingDown size={18} />
                </Icon>
              )}
              {trendType === "flat" && (
                <Icon className="ml-1">
                  <MdTrendingFlat size={18} />
                </Icon>
              )}
            </Text>
          )}
        </Row>

        {description && (
          <Text small gray>
            {description}
          </Text>
        )}
      </Column>
    </Card>
  );
}
