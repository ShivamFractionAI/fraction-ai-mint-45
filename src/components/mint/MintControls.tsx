import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Minus, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MintSuccessModal from "./MintSuccessModal";

interface MintControlsProps {
  isWalletConnected: boolean;
  referralCode: string;
  setReferralCode: (code: string) => void;
}

const MintControls = ({ isWalletConnected, referralCode, setReferralCode }: MintControlsProps) => {
  const [mintQuantity, setMintQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [mintedNFT, setMintedNFT] = useState({ image: "", id: "" });
  const { toast } = useToast();
  const mintPrice = 0.08; // ETH
  const hasReferralDiscount = referralCode.trim().length > 0;
  const discountedPrice = hasReferralDiscount ? mintPrice * 0.95 : mintPrice;
  const totalCost = discountedPrice * mintQuantity;

  // Sample NFT images for the success modal
  const nftImages = [
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
  ];

  const handleMint = () => {
    if (!isWalletConnected) {
      toast({
        title: "Wallet Required",
        description: "Please connect your wallet to mint NFTs",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Minting Started",
      description: `Minting ${mintQuantity} NFT${mintQuantity > 1 ? 's' : ''} for ${totalCost.toFixed(3)} ETH`,
    });

    // Simulate minting process
    setTimeout(() => {
      const randomImage = nftImages[Math.floor(Math.random() * nftImages.length)];
      const randomId = (Math.floor(Math.random() * 9000) + 1000).toString();
      
      setMintedNFT({
        image: randomImage,
        id: randomId
      });
      setShowSuccessModal(true);
    }, 2000);
  };

  return (
    <>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl text-white">Mint Fraction AI NFT</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-sm">Whitelist Stage Active</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
            <div>
              <p className="text-2xl font-bold text-white">{mintPrice.toFixed(2)} ETH</p>
              <p className="text-gray-400 text-sm">${(mintPrice * 192.5).toFixed(1)} USD</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMintQuantity(Math.max(1, mintQuantity - 1))}
                disabled={mintQuantity <= 1}
                className="text-gray-300 hover:text-white hover:bg-gray-600 w-10 h-10"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-xl font-bold text-white w-8 text-center">{mintQuantity}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMintQuantity(Math.min(3, mintQuantity + 1))}
                disabled={mintQuantity >= 3}
                className="text-gray-300 hover:text-white hover:bg-gray-600 w-10 h-10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="referral" className="text-gray-300">Referral Code (Optional)</Label>
            <Input
              id="referral"
              placeholder="Enter referral code for rebates"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-blue-500"
            />
            <p className="text-white text-xs">Referred users get 5% off the mint price.</p>
          </div>

          <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
            <p className="text-3xl font-bold text-white">
              Total: {totalCost.toFixed(3)} ETH
            </p>
            {hasReferralDiscount && (
              <p className="text-green-400 text-sm line-through">
                ${(mintPrice * mintQuantity * 192.5).toFixed(2)} USD
              </p>
            )}
            <p className="text-gray-400 text-sm">
              (${(totalCost * 192.5).toFixed(2)} USD)
            </p>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg py-6 font-bold transform hover:scale-105 transition-all duration-200 border-2 border-purple-400/50"
            style={{ 
              boxShadow: '0 10px 25px rgba(147, 51, 234, 0.5), 0 20px 40px rgba(147, 51, 234, 0.3), 0 30px 60px rgba(147, 51, 234, 0.2)',
              filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.6))'
            }}
            onClick={handleMint}
            disabled={!isWalletConnected}
          >
            {isWalletConnected ? "Mint Now" : "Connect Wallet to Mint"}
          </Button>
        </CardContent>
      </Card>

      <MintSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        nftImage={mintedNFT.image}
        nftId={mintedNFT.id}
        quantity={mintQuantity}
      />
    </>
  );
};

export default MintControls;
