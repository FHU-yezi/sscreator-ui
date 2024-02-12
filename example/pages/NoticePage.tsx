import { Notice, Text } from "../../src/main";

export default function NoticePage() {
  return (
    <>
      <Notice color="success" title="Test Success" />
      <Notice color="info" title="Test Info" />
      <Notice color="warning" title="Test Warning" />
      <Notice color="danger" title="Test Danger" />

      <Notice color="success" title="测试 Success 消息">
        <Text>操作成功执行。</Text>
      </Notice>
      <Notice color="info" title="测试 Info 消息">
        <Text>昨日文章阅读量增长 839，同比提升 14.5%。</Text>
      </Notice>
      <Notice color="warning" title="测试 Warning 消息">
        <Text>您有 1 篇文章未通过审核，请前往创作中心查看。</Text>
      </Notice>
      <Notice color="danger" title="测试 Danger 消息">
        <Text>文章疑似使用了人工智能技术生成，请进行适当标注。</Text>
      </Notice>
    </>
  );
}
