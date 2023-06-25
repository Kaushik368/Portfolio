import "./Left.css";
import { AiFillGithub , AiOutlineInstagram} from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandWhatsapp } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
export default function Left(){
    return(
        <>
        <div className="Left">
            <ul>
                <li><a href="mailto:kaubis368@gmail.com" target="_blank" rel="nofollow noopener noreferrer"><HiOutlineMailOpen/></a></li>
                <li><a href="https://github.com/Kaushik368" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/kaushik-biswas-881bb5183/" target="_blank" rel="nofollow noopener noreferrer"><GrLinkedinOption/></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=919284734835" target="_blank" rel="nofollow noopener noreferrer"><TbBrandWhatsapp/></a></li>
                <li><a href="https://www.instagram.com/arm_.strong/" target="_blank" rel="nofollow noopener noreferrer"><AiOutlineInstagram/></a></li>
            </ul>
        </div>
        </>
    );
}