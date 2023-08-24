import {
  Column,
  ExternalLink,
  Footer as FooterBlock,
  Text,
} from "../../src/main";

export default function Footer() {
  return (
    <FooterBlock>
      <Column gap="gap-2">
        <Text isGray>
          GitHub：
          <ExternalLink href="https://github.com/FHU-yezi/sscreator-ui" />
        </Text>
        <Text isGray>Powered By Open-Source Software</Text>
        <Text isGray>
          By{" "}
          <ExternalLink href="https://www.jianshu.com/u/ea36c8d8aa30">
            初心不变_叶子
          </ExternalLink>
        </Text>
      </Column>
    </FooterBlock>
  );
}
