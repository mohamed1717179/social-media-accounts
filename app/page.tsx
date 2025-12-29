"use client"

import { FaTiktok, FaInstagram, FaFacebookF, FaSnapchatGhost } from "react-icons/fa"

const socialLinks = [
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@created_by_m7md?_r=1&_t=ZS-92cxkRB1CEv",
    color: "#000000",
    glowColor: "rgba(0, 0, 0, 0.5)",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/created_by_m7md?igsh=d2l1dnhvZGR1cWlx",
    color: "#E4405F",
    glowColor: "rgba(228, 64, 95, 0.6)",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1Gjnq2NfYi/",
    color: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.6)",
  },
  {
    name: "Snapchat",
    icon: FaSnapchatGhost,
    url: "https://www.snapchat.com/add/m7md.elgamed?share_id=dKDu4n6XCHk&locale=en-US",
    color: "#FFFC00",
    glowColor: "rgba(255, 252, 0, 0.6)",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon group"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="glass-circle relative flex items-center justify-center">
              <social.icon
                className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 transition-all duration-300 group-hover:scale-110 group-active:scale-95 relative z-10"
                style={{ color: social.color }}
              />
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 -z-10"
                style={{ backgroundColor: social.glowColor }}
              />
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
