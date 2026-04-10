import { UserProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <div className="flex flex-col gap-y-4 items-center">
        <UserProfile />
      </div>
    </div>
  );
};

export default SettingsPage;