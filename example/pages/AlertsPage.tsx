import { Alert, Text } from "../../src/main";

export default function AlertsPage() {
  return (
    <>
      <Text>Alert</Text>
      <Alert type="success">
        <Text type="success" bold>
          测试 Success 消息
        </Text>
        <Text>操作成功执行。</Text>
      </Alert>
      <Alert type="info">
        <Text type="info" bold>
          测试 Info 消息
        </Text>
        <Text>昨日文章阅读量增长 839，同比提升 14.5%。</Text>
      </Alert>
      <Alert type="warning">
        <Text type="warning" bold>
          测试 Warning 消息
        </Text>
        <Text>您有 1 篇文章未通过审核，请前往创作中心查看。</Text>
      </Alert>
      <Alert type="danger">
        <Text type="danger" bold>
          测试 Danger 消息
        </Text>
        <Text>文章疑似使用了人工智能技术生成，请进行适当标注。</Text>
      </Alert>
    </>
  );
}
