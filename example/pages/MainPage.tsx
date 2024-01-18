import PageCard from "../components/PageCard";
import { routes } from "../routes";

export default function MainPage() {
  return (
    <>
      {routes.map((item) => (
        <PageCard name={item.name} path={item.path} />
      ))}
    </>
  );
}
