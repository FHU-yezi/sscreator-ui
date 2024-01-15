import { useLocation } from "wouter-preact";
import { ExternalLink, Heading1, InternalLink } from "../../src/main";

export default function LinkPage() {
  const [, setLocation] = useLocation();

  return (
    <>
      <Heading1>外部链接</Heading1>
      <ExternalLink href="https://www.jianshu.com">测试外部链接</ExternalLink>
      <ExternalLink href="https://www.jianshu.com" type="success">
        测试外部链接 Success
      </ExternalLink>
      <ExternalLink href="https://www.jianshu.com" type="warning">
        测试外部链接 Warning
      </ExternalLink>
      <ExternalLink href="https://www.jianshu.com" type="danger">
        测试外部链接 Danger
      </ExternalLink>

      <Heading1>外部链接（当前标签页打开）</Heading1>
      <ExternalLink href="https://www.jianshu.com" openInCurrentTab>
        测试外部链接
      </ExternalLink>
      <ExternalLink
        href="https://www.jianshu.com"
        type="success"
        openInCurrentTab
      >
        测试外部链接 Success
      </ExternalLink>
      <ExternalLink
        href="https://www.jianshu.com"
        type="warning"
        openInCurrentTab
      >
        测试外部链接 Warning
      </ExternalLink>
      <ExternalLink
        href="https://www.jianshu.com"
        type="danger"
        openInCurrentTab
      >
        测试外部链接 Danger
      </ExternalLink>

      <Heading1>内部链接</Heading1>
      <InternalLink path="/" onClick={() => setLocation("/")}>
        测试内部链接
      </InternalLink>
      <InternalLink path="/" type="success" onClick={() => setLocation("/")}>
        测试内部链接 Success
      </InternalLink>
      <InternalLink path="/" type="warning" onClick={() => setLocation("/")}>
        测试内部链接 Warning
      </InternalLink>
      <InternalLink path="/" type="danger" onClick={() => setLocation("/")}>
        测试内部链接 Danger
      </InternalLink>
    </>
  );
}
