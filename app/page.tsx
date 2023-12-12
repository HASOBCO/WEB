
import Image from "next/image";
import { FaTwitter, FaTiktok, FaDiscord } from "react-icons/fa";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-24 relative">
      <div className="flex flex-col items-center justify-center">
        {/* Image */}
        <Image
          src="https://i.ibb.co/86XKDPT/ccc.png"
          alt="HASOB"
          width={455}
          height={106}
          priority
        />
        <p className="mt-4 text-center text-white text-lg font-fancy">
        Our commitment to developing the Arab world opens new horizons.</p>
      </div>

      {/* Icons at the bottom of the page */}
      {/* Twitter Icon */}
      <a
        href="https://twitter.com/HASOBCO"
        target="_blank"
        className="fixed bottom-0 left-0 mb-4 ml-4"
      >
        <FaTwitter className="text-white text-4xl" />
      </a>

      {/* TikTok Icon */}
      <a
        href="https://www.tiktok.com/@hasobco"
        target="_blank"
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
      >
        <FaTiktok className="text-white text-4xl" />
      </a>

      {/* Discord Icon */}
      <a
        href="https://discord.gg/m88jpHXUH8"
        target="_blank"
        className="fixed bottom-0 right-0 mb-4 mr-4"
      >
        <FaDiscord className="text-white text-4xl" />
      </a>
    </main>
  );
}
