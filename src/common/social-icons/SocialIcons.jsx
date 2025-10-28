import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Environment } from "../../config/env.config";

export default function SocialIcons({ color }) {
  return (
    <div
      className={`flex space-x-4 my-10 text-${color} text-xl cursor-pointer`}
    >
      <Link to={Environment.FACEBOOK_LINK}>
        <FiFacebook />
      </Link>
      <Link to={Environment.X_LINK}>
        <FaXTwitter />
      </Link>
      <Link to={Environment.LINKEDIN_LINK}>
        <FiLinkedin />
      </Link>
      <Link to={Environment.TIKTOK_LINK}>
        <FaTiktok />
      </Link>
      <Link to={Environment.INSTAGRAM_LINK}>
        <FaInstagram />
      </Link>
    </div>
  );
}
