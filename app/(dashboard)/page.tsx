"use client";

import { Button } from "@/components/ui/button";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const {onOpen} = useNewAccount();
  return (
    <div>
      <NewAccountSheet />
      <Button onClick={onOpen}>
        Add an Account
      </Button>
    </div>
  )
}