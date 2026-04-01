import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
  onUpload: (results: any) => void;
};


export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  // TODO: Add a paywall

  return (
    <CSVReader onUploadAccepted={onUpload}>
        {({ getRootProps }: any) => (
        <Button
        size="sm"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800"
        {...getRootProps()}
        >
        <Upload className="size-4" />
        Import
        </Button>
        )}
    </CSVReader>
  );
};