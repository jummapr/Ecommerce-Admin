"use client"

import { toast } from "react-hot-toast";
import { Copy, Server } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const VariantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  description,
  title,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("Api Route Copied to the clipboard");
  };
  return (
    <Alert>
      <Server className="h-4 w-4 " />
      <AlertTitle className="flex items-center gap-x-2 ml-9 md:ml-0">
        {title}
        <Badge variant={VariantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative  rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs md:text-sm font-semibold">
          {description}
        </code>
        <Button variant={"outline"} className="ml-1" size={"icon"} onClick={onCopy}>
          <Copy className="md:h-4 md:w-4 w-6 h-6" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
