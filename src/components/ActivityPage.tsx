
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ActivityPage = () => {
  const activities = [
    { user: "0x9f2a41", amount: 2, time: "3m ago", txHash: "0x8a9b...c1d2", type: "Genesis Alpha" },
    { user: "0x7d5e93", amount: 1, time: "12m ago", txHash: "0x4f8a...b3e7", type: "Genesis Beta" },
    { user: "0xa3f7b8", amount: 3, time: "27m ago", txHash: "0x2c5d...9f1a", type: "Genesis Standard" },
    { user: "0x5c9e12", amount: 1, time: "45m ago", txHash: "0x7b3f...8e2d", type: "Genesis Alpha" },
    { user: "0x1a6d84", amount: 2, time: "1h ago", txHash: "0x9e4c...7a5b", type: "Genesis Beta" },
    { user: "0x8f3b27", amount: 1, time: "1h ago", txHash: "0x6d8f...3c9e", type: "Genesis Standard" },
    { user: "0x4e7c95", amount: 3, time: "2h ago", txHash: "0x1f9a...5d7b", type: "Genesis Alpha" },
    { user: "0x2b8d36", amount: 1, time: "2h ago", txHash: "0x3a7e...9c2f", type: "Genesis Beta" },
    { user: "0x6a9f41", amount: 2, time: "3h ago", txHash: "0x8e5d...4b7a", type: "Genesis Standard" },
    { user: "0x3d7e58", amount: 1, time: "4h ago", txHash: "0x2f6c...8a3d", type: "Genesis Alpha" },
    { user: "0x9c4f82", amount: 2, time: "5h ago", txHash: "0x7e9a...4b2c", type: "Genesis Beta" },
    { user: "0x5a8d19", amount: 1, time: "6h ago", txHash: "0x3f7b...8d5e", type: "Genesis Standard" },
    { user: "0x7f2e64", amount: 3, time: "8h ago", txHash: "0x9b4a...6c7d", type: "Genesis Alpha" },
    { user: "0x2e9c37", amount: 1, time: "10h ago", txHash: "0x5d8f...3a9b", type: "Genesis Beta" },
    { user: "0x8b5f93", amount: 2, time: "12h ago", txHash: "0x1a6e...7c4f", type: "Genesis Standard" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Genesis Alpha': return 'text-purple-400';
      case 'Genesis Beta': return 'text-blue-400';
      case 'Genesis Standard': return 'text-gray-400';
      default: return 'text-gray-400';
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
          <h1 className="text-2xl font-bold text-white">Activity Feed</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">Recent Minting Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {activity.user.slice(2, 4).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-200">{activity.user}</p>
                      <p className="text-xs text-gray-400">
                        minted {activity.amount} <span className={getTypeColor(activity.type)}>{activity.type}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-300">{activity.time}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-300 p-1 h-auto"
                      >
                        <span className="font-mono text-xs">{activity.txHash}</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
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

export default ActivityPage;
