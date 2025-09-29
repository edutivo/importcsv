import { useTranslation } from "../../../i18n/useTranslation";
import { Button } from "../../components/ui/button";
import Box from "../../components/Box";
import { ProcessingProps } from "./types";
import { RotateCcw, Check } from "lucide-react";
import { cn } from "../../../utils/cn";

export default function Processing({ customProcessing }: ProcessingProps) {
  const { t } = useTranslation();
  return (
    <Box className={cn(
      "max-w-[1000px] pt-4 h-full flex-1 shadow-none bg-transparent self-center",
      "flex items-center justify-center text-2xl flex-col gap-4 text-center relative"
    )}>
      <>
        { customProcessing && customProcessing}
      </>
    </Box>
  );
}
