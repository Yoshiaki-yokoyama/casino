// components/ui/footer.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  // Footer sections data
  const sections = [
    {
      title: "Games",
      links: ["Slots", "Live Dealers", "Table Games", "Video Poker", "Crash"]
    },
    {
      title: "Promotions",
      links: ["Welcome Bonus", "Cash Back Deals", "Weekly Cashback", "Tournaments", "VIP Club"]
    },
    {
      title: "Banking",
      links: ["Deposit Options", "Withdraw Options", "Refund Policy", "Payment Security", "AML Policy"]
    },
    {
      title: "Casino",
      links: ["Terms & Conditions", "Privacy Policy", "Bonus Terms", "Affiliate Program", "About Us"]
    },
    {
      title: "Customer Care",
      links: ["Live Chat", "Phone Support", "Email Support", "Help Desk", "Responsible Gaming"]
    }
  ];

  // Footer images
  const footerImages = [
    '/images/footer/footer-2-1.png',
    '/images/footer/footer-2-2.png',
    '/images/footer/footer-2-3.png',
    '/images/footer/footer-2-4.png',
  ]

  const footerIcons = [
    '/images/footer/footer-1.png',
    '/images/footer/footer-2.png',
    '/images/footer/footer-3.png',
    '/images/footer/footer-4.png',
    '/images/footer/footer-5.png',
    '/images/footer/footer-6.png',
    '/images/footer/footer-7.png',
    '/images/footer/footer-8.png',
    '/images/footer/footer-9.png',
    '/images/footer/footer-10.png',
    '/images/footer/footer-11.png',
    '/images/footer/footer-12.png',
  ]

  return (
    <footer className="bg-gray-900 text-white">

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        {/* Links sections - responsive grid */}
        <div className="grid grid-cols-2 md:grid-cols-7 gap-8 mb-12">
            <div className="col-span-2">
                <img src="/images/footer/footer-1.png" alt="footer-1" className="w-12 h-12" />
                <p className="text-lg text-white/70">
                Strike it rich at *******! Experience heart-pounding action with massive jackpots, fast payouts, and VIP treatment that keeps champions coming back. Join thousands of winners today - your fortune awaits!
                </p>
            </div>
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href="#" 
                      className="text-white/70 hover:text-white hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="block sm:hidden flex flex-col gap-2 w-full">
            <img src="/images/footer/footer-3-1.png" alt="footer-1" className="w-full h-1/2" />
            <img src="/images/footer/footer-3-2.png" alt="footer-1" className="w-full h-1/2" />
            
          </div>
        </div>

        {/* footer icons */}
        <div className="w-3/4  mx-auto flex justify-between flex-wrap gap-4 mb-12 items-center">
        {footerIcons.slice(1).map((img, index) => (
            <div key={index} className="rounded-lg">
              <Image 
                src={img} 
                alt={`Footer image ${index + 2}`}
                width={400}
                height={60}
                className="object-contain h-8 w-16"
              />
            </div>
          ))}
        </div>

       

  
        {/* Copyright and legal text */}
        <div className="relative  text-center text-sm text-white/70 space-y-4">
         {/* Additional images row */}
         <div className=" block md:absolute top-0 right-0 flex flex-wrap justify-center gap-4 mb-12">
          {footerImages.slice(1).map((img, index) => (
            <div key={index} className="">
              <Image 
                src={img} 
                alt={`Footer image ${index + 2}`}
                width={120}
                height={60}
                className="object-contain h-12 w-12"
              />
            </div>
          ))}
        </div>
          <p>© 2025 ****, All Rights Reserved.</p>
          <p className="font-bold">GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!</p>
          <p className="max-w-7xl mx-auto">
          ******* casino is operated by *******, ensuring a secure and fair gaming environment for all players. We strictly adhere to all regulatory requirements to maintain transparency and fairness. Our commitment to integrity and ethical practices is at the core of our business. We employ advanced security measures, including SSL encryption and robust firewall systems, to protect your personal and financial information. Promoting responsible gaming is a priority at ******* Casino. We provide tools and resources to help you gamble responsibly. We offer a variety of secure payment methods and ensure seamless transactions. All payment processes are encrypted and compliant with industry standards. Our customer support team is available 24/7 to assist you with any questions or issues you may have. Contact us via Live Chat, Email, or Phone for prompt and professional assistance.
          </p>
        </div>

             {/* Auth buttons - visible on mobile */}
             <div className="mt-4 flex justify-between gap-4 mb-8 md:hidden">
          <button className="w-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition">
            LOG IN
          </button>
          <button className="w-1/2 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md font-medium transition">
            SIGN UP
          </button>
        </div>

      </div>
    </footer>
  );
}