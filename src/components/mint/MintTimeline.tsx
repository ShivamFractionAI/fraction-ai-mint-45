
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MintTimeline = () => {
  const stages = [
    {
      stage: "Whitelist",
      status: "active",
      startTime: "Jan 1, 2025 12:00 UTC",
      endTime: "Jan 15, 2025 12:00 UTC",
      description: "Exclusive access for whitelisted wallets"
    },
    {
      stage: "Public Sale",
      status: "upcoming",
      startTime: "Jan 15, 2025 12:00 UTC",
      endTime: "Until sold out",
      description: "Open minting for all users"
    },
    {
      stage: "Token Distribution",
      status: "upcoming",
      startTime: "Feb 1, 2025 12:00 UTC",
      endTime: "Feb 28, 2025 12:00 UTC",
      description: "Monthly FRAC token distribution to NFT holders"
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-lg text-white">Mint Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            <div className="flex items-start space-x-3">
              <div className={`w-3 h-3 rounded-full mt-1 ${
                stage.status === 'active' ? 'bg-green-500' : 
                stage.status === 'upcoming' ? 'bg-yellow-500' : 'bg-gray-500'
              }`} />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-white">{stage.stage}</h3>
                  <span className={`px-2 py-1 rounded text-xs ${
                    stage.status === 'active' ? 'bg-green-500 text-black' :
                    stage.status === 'upcoming' ? 'bg-yellow-500 text-black' : 'bg-gray-500'
                  }`}>
                    {stage.status === 'active' ? 'LIVE' : 'UPCOMING'}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-1">{stage.description}</p>
                <div className="text-xs text-gray-400 mt-2">
                  <p>Starts: {stage.startTime}</p>
                  <p>Ends: {stage.endTime}</p>
                </div>
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="absolute left-1.5 top-6 w-0.5 h-6 bg-gray-600" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MintTimeline;
