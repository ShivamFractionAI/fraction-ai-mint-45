
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "When can I start to mint?",
      answer: "Minting is currently live for whitelisted wallets. Public sale begins January 15, 2025."
    },
    {
      question: "How many NFTs am I allowed to mint per wallet?",
      answer: "Each wallet can mint a maximum of 3 NFTs during both whitelist and public phases."
    },
    {
      question: "Are there any benefits for NFT holders?",
      answer: "Yes. Holding an NFT grants you access to premium AI trading strategies, monthly FRAC token distributions, governance voting rights, exclusive community access, and priority customer support."
    },
    {
      question: "What do I get for referring others?",
      answer: "You'll receive rebate rewards for up to 3 referrals — $50 for the first, $100 for the second, and $150 for the third successful mint."
    },
    {
      question: "How can I claim a physical edition of my NFT?",
      answer: "Physical editions are not available for this collection. This is a digital-only NFT collection."
    },
    {
      question: "What blockchain is this NFT on?",
      answer: "The Fraction AI NFT collection is deployed on the Ethereum blockchain."
    },
    {
      question: "Who is eligible for whitelist minting?",
      answer: "Whitelist eligibility was determined through community engagement, Discord participation, Twitter contests, and early supporter recognition. Whitelist registration has closed."
    },
    {
      question: "What happens if the collection sells out?",
      answer: "Once all 5,000 NFTs are minted, no additional NFTs will be available from this collection. You can still trade them on secondary markets like OpenSea."
    }
  ];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-white">FAQ</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {faqs.map((faq, index) => (
          <Collapsible key={index} open={openItems.includes(index)}>
            <CollapsibleTrigger
              className="flex w-full items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white"
              onClick={() => toggleItem(index)}
            >
              <span className="font-medium text-left">{faq.question}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${
                openItems.includes(index) ? 'rotate-180' : ''
              }`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 bg-gray-750 rounded-lg mt-2">
              <p className="text-gray-300">{faq.answer}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
};

export default FAQ;
