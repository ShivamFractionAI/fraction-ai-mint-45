
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MintSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  nftImage: string;
  nftId: string;
  quantity: number;
}

const MintSuccessModal = ({ isOpen, onClose, nftImage, nftId, quantity }: MintSuccessModalProps) => {
  const handleShareOnX = () => {
    const text = `You Got It! 🎉\n\nI've successfully minted ${quantity} Fraction AI NFT${quantity > 1 ? 's' : ''} and earned rewards!\n\nJoin the Fraction AI collection! #FractionAI #NFT`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-700 max-w-md mx-auto">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="text-white text-2xl font-bold">
              mintify
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-700 rounded-2xl overflow-hidden">
              <img
                src={nftImage}
                alt={`Fraction AI NFT #${nftId}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <DialogTitle className="text-white text-2xl font-bold">
            You Got It!
          </DialogTitle>
          
          <div className="text-gray-300 text-base space-y-1">
            <p>You've successfully minted {quantity} Fraction AI</p>
            <p>NFT{quantity > 1 ? 's' : ''} and earned <span className="text-blue-400">5 FRAC tokens</span></p>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <Button
            onClick={handleShareOnX}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-medium"
          >
            Share on X
          </Button>
          
          <Button
            onClick={onClose}
            variant="ghost"
            className="w-full text-gray-400 hover:text-white hover:bg-gray-700/50 py-3 rounded-xl"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MintSuccessModal;
