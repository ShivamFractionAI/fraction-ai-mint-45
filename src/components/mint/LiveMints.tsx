
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveMints = () => {
  const liveMints = [
    { user: "0x9f2a41", amount: 1, time: "Just now", nftId: "#2451", txHash: "0x8a9b...c1d2" },
    { user: "0x7d5e93", amount: 2, time: "5s ago", nftId: "#2456", txHash: "0x4f8a...b3e7" },
    { user: "0xa3f7b8", amount: 1, time: "12s ago", nftId: "#3456", txHash: "0x2c5d...9f1a" },
    { user: "0x5c9e12", amount: 3, time: "28s ago", nftId: "#4578", txHash: "0x7b3f...8e2d" },
    { user: "0x1a6d84", amount: 1, time: "45s ago", nftId: "#2489", txHash: "0x9e4c...7a5b" },
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
          Live Mints
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {liveMints.map((mint, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {mint.user.slice(2, 4).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-gray-200">{mint.user}</p>
                  <p className="text-xs text-gray-400">
                    minted {mint.amount} NFT{mint.amount > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="bg-purple-600 text-white">
                  {mint.nftId}
                </Badge>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-300">{mint.time}</p>
                  <p className="text-xs text-blue-400 font-mono">{mint.txHash}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveMints;
