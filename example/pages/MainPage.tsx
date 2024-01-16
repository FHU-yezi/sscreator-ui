import PageCard from "../components/PageCard";

export default function MainPage() {
  return (
    <>
      <PageCard name="文本" path="/text" />
      <PageCard name="标题" path="/heading" />
      <PageCard name="链接" path="/link" />
      <PageCard name="徽标" path="/badge" />
      <PageCard name="按钮" path="/button" />
      <PageCard name="复选框" path="/checkbox" />
      <PageCard name="输入" path="/input" />
      <PageCard name="提示" path="/notice" />
    </>
  );
}
