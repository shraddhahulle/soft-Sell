
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

interface LicenseUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LicenseUploadDialog = ({ open, onOpenChange }: LicenseUploadDialogProps) => {
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      toast({
        title: "License uploaded successfully",
        description: "We'll review your license and get back to you shortly.",
      });
      onOpenChange(false);
      setFileName(null);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload your license</DialogTitle>
          <DialogDescription>
            Upload your software license file or provide license details for a quick valuation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Label htmlFor="license-type">License Type</Label>
              <Input id="license-type" placeholder="e.g. Microsoft Office, Adobe, Autodesk" required />
            </motion.div>
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Label htmlFor="license-key">License Key</Label>
              <Input id="license-key" placeholder="Enter your license key" required />
            </motion.div>
            <motion.div 
              className="grid gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Label htmlFor="license-file">License File (Optional)</Label>
              <div className="flex items-center gap-2">
                <Input 
                  id="license-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex-1 border rounded-md flex items-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      className="h-10 px-3"
                      onClick={() => document.getElementById("license-file")?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" /> Choose File
                    </Button>
                  </motion.div>
                  <span className="text-sm text-muted-foreground px-2 truncate">
                    {fileName || "No file chosen"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" disabled={isUploading}>
                {isUploading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Uploading...
                  </>
                ) : "Upload License"}
              </Button>
            </motion.div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LicenseUploadDialog;
