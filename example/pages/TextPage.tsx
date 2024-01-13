import { LargeText, SmallText, Text } from "../../src/main";

export default function TextPage() {
  return (
    <>
      <Text>测试文本</Text>
      <Text bold>测试文本 Bold</Text>
      <Text type="gray">测试文本 Gray</Text>
      <Text type="success">测试文本 Success</Text>
      <Text type="info">测试文本 Info</Text>
      <Text type="warning">测试文本 Warning</Text>
      <Text type="danger">测试文本 Danger</Text>

      <SmallText>测试文本 Small</SmallText>
      <SmallText bold>测试文本 Small Bold</SmallText>
      <SmallText type="gray">测试文本 Small Gray</SmallText>
      <SmallText type="success">测试文本 Small Success</SmallText>
      <SmallText type="info">测试文本 Small Info</SmallText>
      <SmallText type="warning">测试文本 Small Warning</SmallText>
      <SmallText type="danger">测试文本 Small Danger</SmallText>

      <LargeText>测试文本 Large</LargeText>
      <LargeText bold>测试文本 Large Bold</LargeText>
      <LargeText type="gray">测试文本 Large Gray</LargeText>
      <LargeText type="success">测试文本 Large Success</LargeText>
      <LargeText type="info">测试文本 Large Info</LargeText>
      <LargeText type="warning">测试文本 Large Warning</LargeText>
      <LargeText type="danger">测试文本 Large Danger</LargeText>
    </>
  );
}
