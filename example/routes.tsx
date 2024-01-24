import { lazy } from "preact/compat";
import type { JSX } from "preact/jsx-runtime";

interface RouteItem {
  name: string;
  path: string;
  component(): JSX.Element;
}

export const routes: Array<RouteItem> = [
  {
    name: "标题",
    path: "/heading",
    component: lazy(() => import("./pages/HeadingPage")),
  },
  {
    name: "文本",
    path: "/text",
    component: lazy(() => import("./pages/TextPage")),
  },
  {
    name: "链接",
    path: "/link",
    component: lazy(() => import("./pages/LinkPage")),
  },
  {
    name: "徽章",
    path: "/badge",
    component: lazy(() => import("./pages/BadgePage")),
  },
  {
    name: "按钮",
    path: "/button",
    component: lazy(() => import("./pages/ButtonPage")),
  },
  {
    name: "选择",
    path: "/select",
    component: lazy(() => import("./pages/SelectPage")),
  },
  {
    name: "单选组",
    path: "/radio-group",
    component: lazy(() => import("./pages/RadioGroupPage")),
  },
  {
    name: "复选框",
    path: "/checkbox",
    component: lazy(() => import("./pages/CheckboxPage")),
  },
  {
    name: "输入",
    path: "/input",
    component: lazy(() => import("./pages/InputPage")),
  },
  {
    name: "提示",
    path: "/notice",
    component: lazy(() => import("./pages/NoticePage")),
  },
  {
    name: "折叠",
    path: "/accordion",
    component: lazy(() => import("./pages/AccordionPage")),
  },
  {
    name: "模态窗",
    path: "/modal",
    component: lazy(() => import("./pages/ModalPage")),
  },
  {
    name: "表格",
    path: "/table",
    component: lazy(() => import("./pages/TablePage")),
  },
  {
    name: "加载",
    path: "/loading",
    component: lazy(() => import("./pages/LoadingPage")),
  },
];
