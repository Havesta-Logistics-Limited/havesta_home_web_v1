import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
const socialLinks = [
  {
    label: "Havesta on Facebook",
    href: "https://www.facebook.com/share/1BKct6DEEh/",
    icon: FiFacebook,
  },
  {
    label: "Havesta on X",
    href: "https://x.com/havestahq?t=8MyC1z0ALuVRowpor-naMg&s=09",
    icon: FaXTwitter,
  },
  {
    label: "Havesta on LinkedIn",
    href: "https://www.linkedin.com/company/havesta/",
    icon: FiLinkedin,
  },
  {
    label: "Havesta on TikTok",
    href: "https://www.tiktok.com/@havestahq?is_from_webapp=1&sender_device=pc",
    icon: FaTiktok,
  },
  {
    label: "Havesta on Instagram",
    href: "https://www.instagram.com/havestahq?igsh=cTN0bHVyNjUxeDh1",
    icon: FaInstagram,
  },
];

export default function SocialIcons({ color = "white" }) {
  return (
    <div
      className="flex space-x-4 my-10 text-xl cursor-pointer"
      style={{ color }}
    >
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
