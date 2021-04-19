import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import { useParameter } from "@storybook/api";

const ADDON_ID = "vue-i18n";
const PANEL_ID = `${ADDON_ID}/panel`;

const PARAM_KEY = "myAddon";

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  const item = value ? value.data : "No story parameter defined";
  return <div>{item}</div>;
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Vue i18n",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel />
      </AddonPanel>
    ),
  });
});
