import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { client } from "@/lib/hono";
import { convertAmountFromMiliunits } from "@/lib/utils";

export const useGetSummary = () => {

  const params = useSearchParams();
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const rawAccountId = params.get("accountId");
  const accountId = rawAccountId === "" ? undefined : rawAccountId;

  const query = useQuery({
    // TODO: check if the params are needed in the key 
    queryKey: ["summary", {from, to, accountId}],
    queryFn: async () => {
      const response = await client.api.summary.$get({
        query: {
          from,
          to,
          ...(accountId ? { accountId } : {})
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Summary");
        }

        const { data } = await response.json();
        return {
            ...data,
            incomeAmount: convertAmountFromMiliunits(data.incomeAmount),
            expensesAmount: convertAmountFromMiliunits(data.expensesAmount),
            remainingAmount: convertAmountFromMiliunits(data.remainingAmount),
            categories: data.categories.map((category) => ({
                ...category,
                value: convertAmountFromMiliunits(category.value),
            })),
            days: data.days.map((day) => ({
                ...day,
                income: convertAmountFromMiliunits(day.income),
                expenses: convertAmountFromMiliunits(day.expenses),
            })),
        }
    }
  });

    return query;
};