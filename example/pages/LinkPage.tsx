import { ExternalLink, Heading1, InternalLink } from "../../src/main";

export default function LinkPage() {
  return (
    <>
      <Heading1>外部链接</Heading1>
      <ExternalLink href="https://www.jianshu.com">测试外部链接</ExternalLink>

      <Heading1>外部链接（当前标签页打开）</Heading1>
      <ExternalLink href="https://www.jianshu.com" openInCurrentTab>
        测试外部链接
      </ExternalLink>

      <Heading1>内部链接</Heading1>
      <InternalLink path="/">测试内部链接</InternalLink>
    </>
  );
}
