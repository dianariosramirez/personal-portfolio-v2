import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { SiMaterialdesign } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandFigma,
  TbBrandPython,
  TbBrandTypescript,
  TbBrandVue,
} from "react-icons/tb";

export const skills = {
  javascript: <RiJavascriptLine size={30} color="#195677ff" />,
  typescript: <TbBrandTypescript size={30} color="#3178C6" />,
  react: <FaReact size={30} color="#25819bff" />,
  next: <RiNextjsLine size={30} color="#121b2dff" />,
  html: <AiOutlineHtml5 size={30} color="#0f9de5ff" />,
  css: <TbBrandCss3 size={30} color="#1572B6" />,
  python: <TbBrandPython size={30} color="#3776AB" />,
  figma: <TbBrandFigma size={30} color="#70929aff" />,
  vue: <TbBrandVue size={30} color="#4f7ac0ff" />,
  material: <SiMaterialdesign size={30} color="#8eb4e6ff" />,
};
