import PageCard from "../components/PageCard";

export default function MainPage() {
  return (
    <>
      <PageCard name="文本" path="/text" />
      <PageCard name="按钮" path="/button" />
      <PageCard name="提示" path="/notice" />
    </>
  );
}
