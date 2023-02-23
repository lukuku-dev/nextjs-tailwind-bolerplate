import TableRow from "components/common/table/TableRow";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tailwind Boilerplate with Storybook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table>
        <tbody>
          <TableRow
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            name="Sonang"
            date="1996-6-11"
            count={10}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Home;
