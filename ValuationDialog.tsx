
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Search, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ValuationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const softwareTypes = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "Autodesk AutoCAD",
  "Atlassian Suite",
  "VMware",
  "Oracle",
  "SAP",
  "Other"
];

const ValuationDialog = ({ open, onOpenChange }: ValuationDialogProps) => {
  const { toast } = useToast();
  const [isCalculating, setIsCalculating] = useState(false);
  const [softwareType, setSoftwareType] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    // Simulate valuation process
    setTimeout(() => {
      setIsCalculating(false);
      toast({
        title: "Valuation Complete",
        description: `Your ${softwareType} license${parseInt(quantity) > 1 ? 's are' : ' is'} estimated at $${Math.floor(Math.random() * 500 + 100) * parseInt(quantity)}.`,
      });
      onOpenChange(false);
      setSoftwareType("");
      setQuantity("1");
      setDate(undefined);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get a License Valuation</DialogTitle>
          <DialogDescription>
            Enter your software license details to receive a quick estimate of its market value.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="software-type">Software Type</Label>
              <Select 
                value={softwareType} 
                onValueChange={setSoftwareType}
                required
              >
                <SelectTrigger id="software-type">
                  <SelectValue placeholder="Select software type" />
                </SelectTrigger>
                <SelectContent>
                  {softwareTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="license-quantity">Number of Licenses</Label>
              <Input 
                id="license-quantity" 
                type="number" 
                min="1" 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="purchase-date">Purchase Date (approx.)</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    id="purchase-date"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date > new Date()}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isCalculating || !softwareType || !date}>
              {isCalculating ? (
                <>Calculating Value...</>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" /> Get Valuation
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ValuationDialog;
