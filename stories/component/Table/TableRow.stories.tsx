import TableRow from "components/common/table/TableRow";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Table/TableRow",
  component: TableRow,
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = (args: TableRowProps) => {
  //👇 Your template goes here
  return (
    <table>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  );
};

export const Row = Template.bind({});

Row.args = {
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  name: "Sonang",
  date: "1996-06-11",
  count: 10,
};
