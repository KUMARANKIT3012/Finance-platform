import { Header } from "@/components/header";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <main className="px-3 lg:px-14">
        {children}
      </main>

      {/* 🔥 Mount sheets globally */}
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
};

export default DashboardLayout;