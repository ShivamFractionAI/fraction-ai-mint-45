
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NFTPreview = () => {
  const [currentNFT, setCurrentNFT] = useState(0);
  const { toast } = useToast();

  const nftImages = [
    "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1616516226833-f4ab7b1c6fe4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1642104704074-907c0698b98d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1614680376573-df3480f70df6?w=400&h=400&fit=crop"
  ];

  const referralCode = "REF123ABC";

  // Auto-rotate images every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNFT((prev) => (prev + 1) % nftImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [nftImages.length]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Join Fraction AI NFT Collection",
        text: `Use my referral code ${referralCode} to get 5% off your NFT mint!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`Use my referral code ${referralCode} to get 5% off your NFT mint! ${window.location.href}`);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden mb-4 relative">
            <img
              src={nftImages[currentNFT]}
              alt={`Fraction AI NFT #${currentNFT + 2431}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg">
              <span className="text-sm font-medium">#{currentNFT + 2431}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Fraction AI NFT</h2>
            <div className="flex space-x-1">
              {nftImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentNFT ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-4">
            Each of the 6,000 unique Fraction AI NFTs includes an airdrop of 5 FRAC tokens (from a total supply of 5 million) at the Token Generation Event (TGE).
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-gray-400 text-sm">Chain</span>
              <p className="text-white font-semibold">Ethereum</p>
            </div>
            <div className="text-right">
              <span className="text-gray-400 text-sm">Token Reward</span>
              <p className="text-white font-semibold">5 FRAC (0.001% of 5M total)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referral Section */}
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Earn Rebates by Referring</h3>
          
          <p className="text-gray-300 text-sm mb-4">
            You'll receive 0.001 ETH for each unique user you refer who mints an NFT, with rewards available for up to three successful referrals — a total of 0.003 ETH.
          </p>

          <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-white font-mono text-lg">{referralCode}</span>
              <Button
                onClick={handleCopyCode}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-600"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Button
            onClick={handleShare}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
          >
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-700/50 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-white">0</p>
              <p className="text-gray-400 text-sm">No. of Referrals</p>
            </div>
            <div className="bg-gray-700/50 p-3 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">0.000 ETH</p>
              <p className="text-gray-400 text-sm">Rebate</p>
            </div>
          </div>

          <div className="bg-gray-700/30 p-3 rounded-lg border border-gray-600">
            <p className="text-gray-300 text-xs text-center">
              The rebate will be credited to your wallet after the minting period ends.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NFTPreview;
