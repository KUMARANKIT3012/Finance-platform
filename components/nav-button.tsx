import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
}

export const NavButton = ({
    href,
    label,
    isActive,
}: Props) => {
    const params = useSearchParams();
    const hrefWithParams = params.toString() ? `${href}?${params.toString()}` : href;

    return (
        <Button
            asChild
            size="sm"
            variant="outline"
            className={cn(
                "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
                isActive ? "bg-white/10 text-white" : "bg-transparent",
            )}
        >
            <Link href={hrefWithParams}>
                {label}
            </Link>
        </Button>
    )
}