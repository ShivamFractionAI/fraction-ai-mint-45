
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, Coins } from "lucide-react";

const MintStats = () => {
  const totalSupply = 5000;
  const minted = 2431;
  const uniqueHolders = 1876;
  const mintProgress = (minted / totalSupply) * 100;

  return (
    <div className="space-y-4">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-lg text-white">
            Mint Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">Total Minted</span>
              <span className="font-semibold text-white">{minted.toLocaleString()} / {totalSupply.toLocaleString()}</span>
            </div>
            <Progress value={mintProgress} className="h-3 bg-gray-700" />
            <p className="text-xs text-gray-400 mt-1">{mintProgress.toFixed(1)}% Complete</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{uniqueHolders.toLocaleString()}</p>
            <p className="text-sm text-gray-400">Unique Holders</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-4 text-center">
            <Coins className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-sm text-gray-400">Max NFTs Per Wallet</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MintStats;
