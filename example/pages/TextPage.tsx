import {
  Heading1,
  LargeText,
  SmallText,
  Text,
  UltraLargeText,
} from "../../src/main";

export default function TextPage() {
  return (
    <>
      <Heading1>Text</Heading1>
      <Text>测试文本</Text>
      <Text bold>测试文本 Bold</Text>
      <Text color="gray">测试文本 Gray</Text>
      <Text color="success">测试文本 Success</Text>
      <Text color="info">测试文本 Info</Text>
      <Text color="warning">测试文本 Warning</Text>
      <Text color="danger">测试文本 Danger</Text>

      <Heading1>SmallText</Heading1>
      <SmallText>测试文本 Small</SmallText>
      <SmallText bold>测试文本 Small Bold</SmallText>
      <SmallText color="gray">测试文本 Small Gray</SmallText>
      <SmallText color="success">测试文本 Small Success</SmallText>
      <SmallText color="info">测试文本 Small Info</SmallText>
      <SmallText color="warning">测试文本 Small Warning</SmallText>
      <SmallText color="danger">测试文本 Small Danger</SmallText>

      <Heading1>LargeText</Heading1>
      <LargeText>测试文本 Large</LargeText>
      <LargeText bold>测试文本 Large Bold</LargeText>
      <LargeText color="gray">测试文本 Large Gray</LargeText>
      <LargeText color="success">测试文本 Large Success</LargeText>
      <LargeText color="info">测试文本 Large Info</LargeText>
      <LargeText color="warning">测试文本 Large Warning</LargeText>
      <LargeText color="danger">测试文本 Large Danger</LargeText>

      <Heading1>UltraLargeText</Heading1>
      <UltraLargeText>测试文本 UltraLarge</UltraLargeText>
      <UltraLargeText bold>测试文本 UltraLarge Bold</UltraLargeText>
      <UltraLargeText color="gray">
        测试文本 UltraLarge Gray
      </UltraLargeText>
      <UltraLargeText color="success">
        测试文本 UltraLarge Success
      </UltraLargeText>
      <UltraLargeText color="info">
        测试文本 UltraLarge Info
      </UltraLargeText>
      <UltraLargeText color="warning">
        测试文本 UltraLarge Warning
      </UltraLargeText>
      <UltraLargeText color="danger">
        测试文本 UltraLarge Danger
      </UltraLargeText>
    </>
  );
}
