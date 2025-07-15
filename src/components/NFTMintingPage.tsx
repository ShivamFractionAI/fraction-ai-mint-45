
import { useState } from "react";
import { Link } from "react-router-dom";
import NFTPreview from "./mint/NFTPreview";
import MintControls from "./mint/MintControls";
import MintStats from "./mint/MintStats";
import MintTimeline from "./mint/MintTimeline";
import LiveMints from "./mint/LiveMints";
import FAQ from "./mint/FAQ";
import { Wallet, User, Activity } from "lucide-react";
import { Button } from "./ui/button";

const NFTMintingPage = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Fraction AI NFT Collection</h1>
            <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
              MINTING NOW
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/activity">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Activity className="w-4 h-4 mr-2" />
                Activity
              </Button>
            </Link>
            <Link to="/my-nfts">
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <User className="w-4 h-4 mr-2" />
                My NFTs
              </Button>
            </Link>
            <Button
              onClick={handleWalletConnect}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isWalletConnected ? "0x1234...5678" : "Connect Wallet"}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - NFT Preview */}
          <div className="space-y-6">
            <NFTPreview />
          </div>

          {/* Right Column - Mint Controls, Timeline & Stats */}
          <div className="space-y-6">
            <MintControls 
              isWalletConnected={isWalletConnected}
              referralCode={referralCode}
              setReferralCode={setReferralCode}
            />
            <MintTimeline />
            <MintStats />
          </div>
        </div>

        {/* Live Mints */}
        <div className="mb-8">
          <LiveMints />
        </div>

        {/* FAQ Section */}
        <FAQ />
      </div>
    </div>
  );
};

export default NFTMintingPage;
