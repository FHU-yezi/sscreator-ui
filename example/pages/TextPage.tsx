import { Heading1, LargeText, SmallText, Text } from "../../src/main";

export default function TextPage() {
  return (
    <>
      <Heading1>Text</Heading1>
      <Text>测试文本</Text>
      <Text bold>测试文本 Bold</Text>
      <Text colorScheme="gray">测试文本 Gray</Text>
      <Text colorScheme="success">测试文本 Success</Text>
      <Text colorScheme="info">测试文本 Info</Text>
      <Text colorScheme="warning">测试文本 Warning</Text>
      <Text colorScheme="danger">测试文本 Danger</Text>

      <Heading1>SmallText</Heading1>
      <SmallText>测试文本 Small</SmallText>
      <SmallText bold>测试文本 Small Bold</SmallText>
      <SmallText colorScheme="gray">测试文本 Small Gray</SmallText>
      <SmallText colorScheme="success">测试文本 Small Success</SmallText>
      <SmallText colorScheme="info">测试文本 Small Info</SmallText>
      <SmallText colorScheme="warning">测试文本 Small Warning</SmallText>
      <SmallText colorScheme="danger">测试文本 Small Danger</SmallText>

      <Heading1>LargeText</Heading1>
      <LargeText>测试文本 Large</LargeText>
      <LargeText bold>测试文本 Large Bold</LargeText>
      <LargeText colorScheme="gray">测试文本 Large Gray</LargeText>
      <LargeText colorScheme="success">测试文本 Large Success</LargeText>
      <LargeText colorScheme="info">测试文本 Large Info</LargeText>
      <LargeText colorScheme="warning">测试文本 Large Warning</LargeText>
      <LargeText colorScheme="danger">测试文本 Large Danger</LargeText>
    </>
  );
}
