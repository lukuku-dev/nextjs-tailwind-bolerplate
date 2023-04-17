import type { Meta, StoryObj } from "@storybook/react";
import TableRow from "components/common/table/TableRow";

const meta: Meta<typeof TableRow> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Table/TableRow",
  component: TableRow,
};

export default meta;
type Story = StoryObj<typeof TableRow>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Row: Story = {
  // args: {
  //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   name: "Sonang",
  //   date: "1996-06-11",
  //   count: 10,
  // },
  render: () => (
    <table>
      <tbody>
        <TableRow
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          name="Sonang"
          date="1996-06-11"
          count={10}
        />
      </tbody>
    </table>
  ),
};
