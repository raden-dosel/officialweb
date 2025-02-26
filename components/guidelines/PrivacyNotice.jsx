"use client";
import { Shield, Lock, FileCheck, Eye, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from "next/navigation";
import HoverBottomButton from './BottomButton';

const PrivacyNotice = () => {
  const router = useRouter();
  const privacyFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Compliance",
      description: "We strictly adhere to the Data Privacy Act of 2012 (RA 10173), ensuring your personal data rights are protected under Philippine law."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Storage",
      description: "Your selfies are encrypted and stored securely, with access limited only to authorized research personnel."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Consent-Based Usage",
      description: "We only use your data for the specified research purposes that you've explicitly consented to."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "You have the right to access, correct, and request deletion of your data at any time."
    }
  ];

  const handleNextClick = () => {
    router.push("/cloth");
  };

  return (
    <div className="min-h-screen ">
      <div className="w-full max-w-4xl mx-auto p-8 md:p-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-pink-100 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-pink-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Protected by the Data Privacy Act of 2012 (Republic Act 10173)
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {privacyFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-white hover:bg-pink-50/50 border-2 
                border-pink-100/50 hover:border-pink-200 hover:shadow-xl transition-all 
                duration-300 rounded-2xl"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-2 p-6">
                <div className="p-3 bg-pink-100 rounded-xl text-pink-600 
                  group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 pt-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed pl-16">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Section */}
        <Card className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 border-none 
          shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-3">
                <Lock className="w-6 h-6 text-pink-600" />
                Our Commitment to Your Privacy
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  As researchers, we understand the importance of protecting your personal data.
                  Your selfies and related information are handled with the utmost care and in
                  strict compliance with the Data Privacy Act of 2012.
                </p>
                <p className="leading-relaxed">
                  We implement robust security measures to prevent unauthorized access,
                  disclosure, and improper use of your data. Your trust is important to us,
                  and we are committed to maintaining the confidentiality and integrity of
                  your personal information throughout our research process.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="mt-12">
          <HoverBottomButton
            onClick={handleNextClick}
            variant="gradient"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;