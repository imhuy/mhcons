
import AppLayout from "@/components/Layout/AppLayout";
import { NextPage } from "next";

interface Props {
  chainQuery?: string;
  categoryQuery?: string;
}

const AppPage: NextPage<Props> = ({ chainQuery, categoryQuery }) => {



  return (
    <AppLayout>
      <div className=" bg-[#1c1d24] w-64 h-64"> xx </div>
    </AppLayout>
  );
};

export default AppPage;

