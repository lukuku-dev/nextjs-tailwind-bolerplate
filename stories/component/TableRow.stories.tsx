import React from "react";
import TableRow from "components/common/table/TableRow";
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
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  name: "Sonang",
  date: "1996-06-11",
  count: 10,
};
