import React from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { RepositoryOverView } from "../RepositoryOverview/RepositoryOverview";
import { RepositoryRelease } from "../RepositoryRelease/repositoryRelease";
import { RepositoryActivity } from "../RepositoryActivity/repositoryActivity";
import {Issues} from '../Issues/Stats'

export function RepositoryInfoTabs() {
  // Implement your component logic here
  const [selected, setSelected] = React.useState(0);

  const handleSelect = (e: { selected: React.SetStateAction<number>; }) => {
    setSelected(e.selected);
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ width: "100%", padding: "20px" }} className="repository-info-tabs">
        <TabStrip selected={selected} onSelect={handleSelect}>
          <TabStripTab title="Overview">
            <RepositoryOverView />
          </TabStripTab>
          <TabStripTab title="Activity">
            <div>
            <RepositoryActivity/>
            </div>
          </TabStripTab>
          <TabStripTab title="Stats">
            <div>
                <Issues/>
            </div>
          </TabStripTab>
          <TabStripTab title="Releases">
            <div>
              <RepositoryRelease />
            </div>
          </TabStripTab>
        </TabStrip>
      </div>
    </div>
  );
}
