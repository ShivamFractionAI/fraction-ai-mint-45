
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const MyNFTsPage = () => {
  const userNFTs = [
    {
      id: "#0001",
      name: "Genesis Alpha #1",
      type: "Genesis Alpha",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop",
      rarity: "Ultra Rare",
      mintDate: "2025-01-03",
      txHash: "0x8a9b...c1d2"
    },
    {
      id: "#0015",
      name: "Genesis Beta #15", 
      type: "Genesis Beta",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop",
      rarity: "Rare",
      mintDate: "2025-01-02",
      txHash: "0x4f8a...b3e7"
    },
    {
      id: "#0032",
      name: "Genesis Standard #32",
      type: "Genesis Standard", 
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=300&fit=crop",
      rarity: "Common",
      mintDate: "2025-01-01",
      txHash: "0x2c5d...9f1a"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Ultra Rare': return 'bg-purple-600 text-white';
      case 'Rare': return 'bg-blue-600 text-white';
      case 'Common': return 'bg-gray-600 text-gray-200';
      default: return 'bg-gray-600 text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Mint
          </Button>
          <h1 className="text-2xl font-bold text-white">My NFT Collection</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Your Fraction AI NFTs</h2>
          <p className="text-gray-400">You own {userNFTs.length} NFTs from the Genesis Collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userNFTs.map((nft, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
              <CardContent className="p-4">
                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden mb-4">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{nft.name}</h3>
                    <p className="text-sm text-gray-400">{nft.id}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getRarityColor(nft.rarity)}`}>
                    {nft.rarity}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Minted:</span>
                    <span className="text-gray-300">{nft.mintDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Transaction:</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 p-1 h-auto"
                    >
                      <span className="font-mono text-xs">{nft.txHash}</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  View on OpenSea
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {userNFTs.length === 0 && (
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">No NFTs Found</h3>
              <p className="text-gray-400 mb-4">You haven't minted any Fraction AI NFTs yet.</p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.history.back()}
              >
                Start Minting
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyNFTsPage;
