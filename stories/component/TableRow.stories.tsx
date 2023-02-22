import React from "react";
import TableRow from "components/common/table/TableRow";
import { TableRowProps } from "components/common/table/interface";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "TableRow",
  component: TableRow,
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = (args: TableRowProps) => {
  //👇 Your template goes here
  return <TableRow {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
  text: "text",
  name: "name",
  date: "date",
  count: 10,
};
