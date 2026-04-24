export const dynamic = "force-dynamic";
import { Header } from "@/components/header";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";
import { NewCategorySheet } from "@/features/categories/components/new-category-sheet";
import { EditCategorySheet } from "@/features/categories/components/edit-category-sheet";
import { NewTransactionSheet } from "@/features/transactions/components/new-transaction-sheet";


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

      {/* ✅ ADD THESE */}
      <NewCategorySheet />
      <EditCategorySheet />

      <NewTransactionSheet />
    </>
  );
};

export default DashboardLayout;