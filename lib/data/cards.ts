import single from "@/public/single-bg.png";
import three from "@/public/three-bg.png";
import multiple from "@/public/multiple-bg.png";

export const cardsContent = [
  {
    icon: single,
    total: "23",
    content: "Events held in July",
  },
  {
    icon: three,
    total: "694",
    content: "students reached  in July",
  },
  {
    icon: multiple,
    total: "36,052",
    content: "students reached in 2023",
  },
] as const;
