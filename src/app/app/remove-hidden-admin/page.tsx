import Header from "@/components/HeaderApp";
import AppLayout from "@/components/Layout/AppLayout";
import { NextPage } from "next";

interface Props {
  chainQuery?: string;
  categoryQuery?: string;
}

const AppPage: NextPage<Props> = ({ chainQuery, categoryQuery }) => {

  const Acc = [
    { status: 1, name: "Huy Lưu", sodu: 1000000, nguong: 10, nguongconlai: 12, limit: 2132, tongchi: 1200000, gioihan: 999, tiente: 'VND', quyen: 'Admin', ptThanhtoan: 'visa', ngaylaphoadon: '24 dec 2023', lydobikhoa: 'unknow', ngaytaotk: '10 dec 20', loaitaikhoan: 'Individual', muigio: 'America/Los_Angeles | -8', chusohuu: 'unknow', quocgia: 'VN' },
    { status: 2, name: "Huy Lưu", sodu: 1000000, nguong: 10, nguongconlai: 12, limit: 2132, tongchi: 12, gioihan: 999, tiente: 'VND', quyen: 'Admin', ptThanhtoan: 'visa', ngaylaphoadon: '24 dec 2023', lydobikhoa: 'unknow', ngaytaotk: '10 dec 20', loaitaikhoan: 'ca nhan', muigio: 'America', chusohuu: 'unknow', quocgia: 'VN' },
    { status: 1, name: "Huy Lưu", sodu: 1000000, nguong: 10, nguongconlai: 12, limit: 2132, tongchi: 12, gioihan: 999, tiente: 'VND', quyen: 'Admin', ptThanhtoan: 'visa', ngaylaphoadon: '24 dec 2023', lydobikhoa: 'unknow', ngaytaotk: '10 dec 20', loaitaikhoan: 'ca nhan', muigio: 'America', chusohuu: 'unknow', quocgia: 'VN' },
    { status: 1, name: "Huy Lưu", sodu: 1000000, nguong: 10, nguongconlai: 12, limit: 2132, tongchi: 12, gioihan: 999, tiente: 'VND', quyen: 'Admin', ptThanhtoan: 'visa', ngaylaphoadon: '24 dec 2023', lydobikhoa: 'unknow', ngaytaotk: '10 dec 20', loaitaikhoan: 'ca nhan', muigio: 'America', chusohuu: 'unknow', quocgia: 'VN' },

    { status: 2, name: "Huy Lưu", sodu: 1000000, nguong: 10, nguongconlai: 12, limit: 2132, tongchi: 12, gioihan: 999, tiente: 'VND', quyen: 'Admin', ptThanhtoan: 'visa', ngaylaphoadon: '24 dec 2023', lydobikhoa: 'unknow', ngaytaotk: '10 dec 20', loaitaikhoan: 'ca nhan', muigio: 'America', chusohuu: 'unknow', quocgia: 'VN' },

  ]

  const renderStatus = (code: number) => {
    switch (code) {
      case 1:
        return (
          <div className="flex  items-center gap-x-1  text-start   "> <div className=" w-1 h-1 rounded-full bg-green-500"></div> <span className=" text-green-600 font-semibold"> Active</span> </div >
        )

      case 2:
        return (
          <div className="flex   items-center gap-x-1 text-start   "> <div className=" w-1 h-1 rounded-full bg-red-600"></div> <span className=" text-red-600 font-semibold"> Disable</span> </div >

        )
      default:
        return '-'
    }
  }

  const formatCurrency = (number: any) => {
    try {
      let numberConvert = parseFloat(number);
      if (!isNaN(numberConvert)) {
        return numberConvert.toLocaleString('en-US');
      }
      return 0;
    } catch (error) {
      return 0;
    }
  };
  return (
    <AppLayout>
      <div className="w-full relative ">
        <div className="p-6 bg-[#12141e]">
          <Header title="Remove Hidden Admin" />
          <div className="h-[1px] bg-white  bg-opacity-20 my-4 max-lg:hidden" />
        </div>


        <div className="scrollmenu  ">
          <table >
            <thead>
              <tr className="flex gap-x-6 px-5 mb-5 mt-2">
                <th className=" w-20  text-start"><span className=" font-semibold text-sm">Status </span> </th>
                <th className=" w-16 max-w-[80px]  text-center"><span className="font-semibold text-sm ">Surplus</span> </th>
                <th className=" w-20  text-center"><span className=" font-semibold text-sm ">Threshold </span> </th>
                <th className=" w-40  text-center"><span className=" font-semibold text-sm  ">Remaining Threshold </span> </th>
                <th className=" w-40    text-center"><span className=" font-semibold text-sm  ">Limit </span> </th>
                <th className=" w-32  text-center"><span className=" font-semibold text-sm  ">Total Spending</span> </th>
                <th className=" w-32  text-center"><span className=" font-semibold text-sm  ">Spending Limit</span> </th>
                <th className=" w-20  text-center"><span className=" font-semibold text-sm  ">Currency</span> </th>
                <th className=" w-16  text-center"><span className=" font-semibold text-sm  ">Ownership</span> </th>
                <th className=" w-32  text-center"><span className=" font-semibold text-sm  ">Payment Methods</span> </th>
                <th className=" w-32   text-center"><span className=" font-semibold text-sm  ">Invoice date</span> </th>
                <th className=" w-20  text-center"><span className=" font-semibold text-sm  ">Lock reason</span> </th>
                <th className=" w-44  text-center"><span className=" font-semibold text-sm  "> Account Creation Date</span> </th>
                <th className=" w-32  text-center   "><span className=" font-semibold text-sm  ">Account type</span> </th>
                <th className=" w-48  text-center  "><span className=" font-semibold text-sm  ">Time Zone</span> </th>
                <th className=" w-20  text-center    "><span className=" font-semibold text-sm  ">Owner</span> </th>
                <th className=" w-32  text-center"><span className=" font-semibold text-sm  ">Nation</span> </th>
              </tr>
            </thead>

            <tbody>
              {[...Acc].map((item, i) =>

                <tr className={`flex  gap-x-6 py-5  px-5 border-b  ${i % 2 == 0 ? 'bg-slate-100' : ''}`}>
                  <td className=" text-start  w-20  "><span className="font-normal text-sm">{renderStatus(item.status)} </span></td>
                  <td className="text-center font-normal text-sm w-16 max-w-[80px]  "><span className=" font-normal text-sm  ">{item.sodu} </span></td>
                  <td className="text-center font-normal text-sm w-20 max-w-[80px]  "><span className=" font-normal text-sm  ">{item.nguong}</span></td>
                  <td className="text-center font-normal text-sm w-40"><span className=" font-normal text-sm  ">{item.nguongconlai}</span></td>

                  <td className="text-center font-normal text-sm w-40"><span className=" font-normal text-sm  ">{item.limit}</span></td>
                  <td className="text-center font-normal text-sm w-32    "><span className=" font-normal text-sm  ">{formatCurrency(item.tongchi)}</span></td>
                  <td className="text-center font-normal text-sm w-32    "><span className=" font-normal text-sm  ">-</span></td>
                  <td className="text-center font-normal text-sm w-20    "><span className=" font-normal text-sm  ">{item.tiente}</span></td>

                  <td className="text-center font-normal text-sm w-16    "><span className=" font-normal text-sm  ">{item.quyen}</span></td>

                  <td className="text-center font-normal text-sm w-32    "><span className=" font-normal text-sm  ">{item.ptThanhtoan}</span></td>

                  <td className="text-center font-normal text-sm w-32    "><span className=" font-normal text-sm  ">{item.ngaylaphoadon}</span></td>

                  <td className="text-center font-normal text-sm w-20    "><span className=" font-normal text-sm  ">-</span></td>

                  <td className="text-center font-normal text-sm w-44    "><span className=" font-normal text-sm  ">{item.ngaytaotk}</span></td>


                  <td className="text-center font-normal text-sm w-32      "><span className=" font-normal text-sm  ">{item.loaitaikhoan}</span></td>

                  <td className="text-center font-normal text-sm w-48     "><span className=" font-normal text-sm  ">{item.muigio}</span></td>

                  <td className="text-center font-normal text-sm w-20      "><span className=" font-normal text-sm  ">{item.chusohuu}</span></td>
                  <td className="text-center font-normal text-sm w-32    "><span className=" font-normal text-sm  ">{item.quocgia}</span></td>



                </tr>

              )}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
};

export default AppPage;


