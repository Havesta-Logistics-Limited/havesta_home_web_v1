import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SocialIcons({ color = "white" }) {
  return (
    <div
      className="flex space-x-4 my-10 text-xl cursor-pointer"
      style={{ color }}
    >
      <Link to={"https://www.facebook.com/share/1BKct6DEEh/"}>
        <FiFacebook />
      </Link>
      <Link to={"https://x.com/havestahq?t=8MyC1z0ALuVRowpor-naMg&s=09"}>
        <FaXTwitter />
      </Link>
      <Link to={"https://www.linkedin.com/company/havesta/"}>
        <FiLinkedin />
      </Link>
      <Link
        to={
          "https://www.tiktok.com/@havestahq?is_from_webapp=1&sender_device=pc"
        }
      >
        <FaTiktok />
      </Link>
      <Link to={"https://www.instagram.com/havestahq?igsh=cTN0bHVyNjUxeDh1"}>
        <FaInstagram />
      </Link>
    </div>
  );
}
