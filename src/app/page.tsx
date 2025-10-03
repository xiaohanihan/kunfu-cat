// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-nunito">
      {/* Header */}
      <div className="bg-black text-white h-10 px-6 flex justify-between items-center">
        <h1 className="text-[20px] font-bold">It's Over KFCAT!</h1>
        <button className="text-white text-xl">✕</button>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        
        {/* First Card - Visit PancakeSwap */}
        <div className="bg-black text-white p-6 m-4 rounded-lg">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🐰</span>
            </div>
          </div>
          <div className="text-center">
            <p className="mb-2">Visit <span className="text-blue-400">pancakeswap.finance</span> in</p>
            <p className="mb-4">Chrome or inside your wallet's browser.</p>
            <p>Connect your wallet, then paste the official</p>
            <p>KFCAT contract address to load the token.</p>
          </div>
        </div>

        {/* Second Card - Swap BNB */}
        <div className="bg-black text-white p-6 m-4 rounded-lg">
          <h2 className="text-yellow-400 text-2xl font-bold text-center mb-4">Swap BNB for KFCAT</h2>
          <h3 className="text-white text-xl text-center mb-4">KFCAT</h3>
          <p className="text-center text-sm">
            Paste the KFCAT Contract Address on PancakeSwap and swap your BNB for KFCAT tokens. Once confirmed, the tokens will appear in your wallet.
          </p>
        </div>

        {/* Scrolling Text */}
        <div className="py-4 overflow-hidden bg-gray-100">
          <div className="animate-marquee whitespace-nowrap text-gray-600 text-lg font-bold">
            it's OVER KFCAT! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; it's OVER KFCAT! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; it's OVER KFCAT! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; it's OVER KFCAT! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>

        {/* Join Button */}
        <div className="bg-black text-white p-6 m-4 rounded-lg text-center">
          <h2 className="text-2xl font-bold">JOIN KFCAT</h2>
        </div>

        {/* How to Buy Section */}
        <div className="bg-white p-4">
          <h2 className="text-2xl font-bold text-center mb-6">How to Buy</h2>
          
          {/* Create Wallet Card */}
          <div className="bg-black text-white p-6 mb-4 rounded-lg">
            <h3 className="text-yellow-400 text-xl font-bold text-center mb-4">Create a Wallet</h3>
            <div className="flex justify-center mb-4">
              <span className="text-2xl">🦊</span>
            </div>
            <p className="text-center text-sm">
              Download <strong>MetaMask</strong> or <strong>Trust Wallet</strong> from the App Store or Google Play Store for free. For desktop, download the <strong>MetaMask Chrome extension</strong> at metamask.io.
            </p>
          </div>

          {/* Get BNB Card */}
          <div className="bg-black text-white p-6 mb-4 rounded-lg">
            <h3 className="text-yellow-400 text-xl font-bold text-center mb-4">Get Some BNB</h3>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xl">📦</span>
              </div>
            </div>
            <p className="text-center text-sm">
              Make sure you have <strong>BNB (Binance Coin)</strong> in your wallet to swap for KFCAT. You can purchase BNB directly on Binance, or buy from an exchange like Coinbase/Kraken and transfer it to your wallet.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-yellow-400 p-4">
          <div className="bg-black p-4 rounded-lg mb-4">
            <div className="bg-gradient-to-r from-pink-300 to-purple-300 p-4 rounded mb-2 text-center">
              <div className="text-white text-lg font-bold" style={{textShadow: '2px 2px 0 #000'}}>
                OVER KFCAT!
              </div>
              <div className="text-xs text-gray-600 mt-1">GIF</div>
            </div>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <span>💬 240</span>
              <span>� 696</span>
              <span>❤️ 3.6K</span>
              <span>📊</span>
              <span>🔖</span>
              <span>↗️</span>
            </div>
          </div>

          <div className="bg-black p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold">CZ 🔶 BNB ✓ @cz_binan... · 17 Jun 19 🔄</p>
              </div>
              <div className="text-gray-400">⋯</div>
            </div>
            <p className="text-blue-400 text-sm mb-2">It's over KFCAT! binance.com/en/blog/347360...</p>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <span>💬 86</span>
              <span>🔄 206</span>
              <span>❤️ 1.1K</span>
              <span>📊</span>
              <span>🔖</span>
              <span>↗️</span>
            </div>
          </div>
          
          <div className="bg-black p-4 rounded-lg mt-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold">CZ 🔶 BNB ✓ @cz_bina... · 24 Jun 19 🔄</p>
              </div>
              <div className="text-gray-400">⋯</div>
            </div>
            <p className="text-white text-sm mb-2">
              Throwback to #2YearsAgoToday, we started the #Binance 🔶 ICO, on our own brand new site. #Over9000 people rushed in on Day 1. Thank you for your support!
            </p>
            <p className="text-white text-xs mb-2">
              (Dug up a screenshot from my archives. BNB was called BNC back then.)
            </p>
            <div className="bg-gray-800 p-3 rounded mb-2">
              <p className="text-yellow-400 text-xs text-center mb-1">Binance - World-Class Blockchain Asset Exchange</p>
              <p className="text-yellow-400 text-sm text-center font-bold mb-1">Registration starts in:</p>
              <p className="text-white text-center text-lg font-mono">0 : 00 : 00 : 00</p>
              <div className="flex justify-center space-x-4 mt-2">
                <button className="bg-yellow-400 text-black px-3 py-1 rounded text-xs">Register</button>
                <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs">ICO Details</button>
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <span>💬 132</span>
              <span>🔄 185</span>
              <span>❤️ 886</span>
              <span>📊</span>
              <span>🔖</span>
              <span>↗️</span>
            </div>
          </div>
        </div>

        {/* Buy Now Section */}
        <div className="bg-white p-6 text-center">
          <button className="bg-yellow-400 text-black px-8 py-3 rounded font-bold text-lg">
            BUY NOW
          </button>
        </div>

        {/* Meme Section */}
        <div className="bg-black text-white p-6">
          <p className="text-center text-lg mb-6">
            The legendary meme coin that breaks all limits. It's not just power...
          </p>
        </div>

        <div className="bg-yellow-400 p-6">
          <h2 className="text-black text-2xl font-bold text-center mb-4">
            Cz Knows... It's Over KFCAT!
          </h2>
          
          <div className="bg-black p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-white text-sm font-bold">M 🔺 qUra ✓ @MagUraCrypto · Feb 13 🔄</p>
              </div>
              <div className="text-gray-400">⋯</div>
            </div>
            <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 p-6 rounded mb-2 text-center relative">
              <div className="text-white text-xl font-bold" style={{textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'}}>
                IT'S OVER KFCAT!!!
              </div>
              <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                ⏸️ GIF
              </div>
            </div>
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <span>💬 4</span>
              <span>🔄 1</span>
              <span>❤️ 130</span>
              <span>📊 160K</span>
              <span>🔖</span>
              <span>↗️</span>
            </div>
          </div>
        </div>

        {/* Final Meme Image */}
        <div className="bg-white p-6">
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 p-8">
              <div className="text-center">
                <h1 className="text-white text-4xl font-bold mb-2" style={{textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'}}>
                  IT'S OVER
                </h1>
                <h1 className="text-white text-6xl font-bold" style={{textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'}}>
                  KFCAT!!!
                </h1>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-center my-6">KFCAT</h1>
          <p className="text-center text-xl font-bold mb-6">it's OVER KFCAT!</p>
          
          <div className="bg-black text-white p-4 rounded-lg text-center">
            <p className="font-mono text-sm break-all">
              0xd19cc8a170daa38cb5093b9bb3ac82abea1b6b52
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
