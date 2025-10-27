import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SocialIcons({ color }) {
  return (
    <div
      className={`flex space-x-4 my-10 text-${color} text-xl cursor-pointer`}
    >
      <Link to="">
        <FiFacebook />
      </Link>
      <Link to="">
        <FaXTwitter />
      </Link>
      <Link to="">
        <FiLinkedin />
      </Link>
      <Link to="">
        <FaTiktok />
      </Link>
      <Link to="">
        <FaInstagram />
      </Link>
    </div>
  );
}
