import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Menu,
  TabStrip,
  TabStripTab,
} from "@progress/kendo-react-layout";
import * as React from "react";
import "./repositories.scss";
import { RepositoryInfoTabs } from "../../components/Repository/RepositoryInfoTabs/RepositoryInfoTabs";

export function Repositories() {
  const menuItems = [
    { text: "Item 1" },
    { text: "Item 2" },
    { text: "Item 3" },
  ];

  const [selected, setSelected] = React.useState(0);

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <>
      <div className="mb-20"
        style={{
          display: "flex",
          height: "calc(100vh - 56px)",
          marginTop: "20px",
        }}
      >
        {" "}
        {/* Adjust height and marginTop based on AppBar height */}
        <div style={{ width: "100%" }}>
          <RepositoryInfoTabs />
        </div>
      </div>
    </>
  );
}
