
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const HoldersPage = () => {
  const topHolders = [
    { address: "0xa817e8", owned: 15, percentage: 0.62, rank: 1 },
    { address: "0xb92f13", owned: 12, percentage: 0.49, rank: 2 },
    { address: "0xc4e7a9", owned: 10, percentage: 0.41, rank: 3 },
    { address: "0xd8f2b6", owned: 8, percentage: 0.33, rank: 4 },
    { address: "0xe3c1d7", owned: 7, percentage: 0.29, rank: 5 },
    { address: "0xf9a4b2", owned: 6, percentage: 0.25, rank: 6 },
    { address: "0x1b8e5c", owned: 5, percentage: 0.21, rank: 7 },
    { address: "0x2c7f9d", owned: 5, percentage: 0.21, rank: 8 },
    { address: "0x3d6a8e", owned: 4, percentage: 0.16, rank: 9 },
    { address: "0x4e5b7f", owned: 4, percentage: 0.16, rank: 10 },
    { address: "0x5f4c8a", owned: 3, percentage: 0.12, rank: 11 },
    { address: "0x6a3d9b", owned: 3, percentage: 0.12, rank: 12 },
    { address: "0x7b2e8c", owned: 3, percentage: 0.12, rank: 13 },
    { address: "0x8c1f7d", owned: 2, percentage: 0.08, rank: 14 },
    { address: "0x9d0a6e", owned: 2, percentage: 0.08, rank: 15 },
    { address: "0xa0b5c9", owned: 2, percentage: 0.08, rank: 16 },
    { address: "0xb1c4d8", owned: 2, percentage: 0.08, rank: 17 },
    { address: "0xc2d3e7", owned: 1, percentage: 0.04, rank: 18 },
    { address: "0xd3e2f6", owned: 1, percentage: 0.04, rank: 19 },
    { address: "0xe4f1a5", owned: 1, percentage: 0.04, rank: 20 },
  ];

  const totalSupply = 2431;
  const uniqueHolders = 1876;

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
          <h1 className="text-2xl font-bold text-white">NFT Holders</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">{totalSupply.toLocaleString()}</p>
              <p className="text-sm text-gray-400">Total Minted</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">{uniqueHolders.toLocaleString()}</p>
              <p className="text-sm text-gray-400">Unique Holders</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-white">{((uniqueHolders/totalSupply)*100).toFixed(1)}%</p>
              <p className="text-sm text-gray-400">Holder Ratio</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">Top Holders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topHolders.map((holder, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {holder.rank}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-gray-300">{holder.address}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-300 p-1 h-auto"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white">{holder.owned} NFTs</p>
                    <p className="text-xs text-gray-400">{holder.percentage}% of supply</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HoldersPage;
