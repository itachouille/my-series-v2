"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => Promise<void>;
  disabled?: boolean;
  header: string;
  description?: string;
  itemName?: string;
}

export default function ConfirmModal({
  children,
  onConfirm,
  disabled,
  header,
  description,
  itemName = "item",
}: ConfirmModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
    } catch (error) {
      console.error("Error during deletion:", error);
      toast({
        description: "Error during deletion",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      toast({
        description: "Deleted",
        variant: "default",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="sm:max-w-[425px] bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 text-2xl font-semibold text-destructive">
            <AlertTriangle className="h-6 w-6" />
            {header}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-muted-foreground">
            {description ||
              `Are you sure you want to delete this ${itemName}? This action cannot be undone.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-4 bg-muted rounded-md p-4 text-sm text-muted-foreground">
          <p>To confirm, please click the &quot;Delete&quot; button below.</p>
          <p className="mt-2">
            This will permanently remove the {itemName} from our systems.
          </p>
        </div>
        <AlertDialogFooter className="mt-6 flex justify-end space-x-2">
          <AlertDialogCancel className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            disabled={disabled || isDeleting}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
