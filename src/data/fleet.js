import {
  FaUsers,
  FaBluetoothB,
  FaUsb,
  FaSuitcaseRolling,
  FaRestroom,
} from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiCarSeat } from "react-icons/gi";

export default [
  {
    id: 1,
    name: "Ônibus Convencional",
    features: [
      { icon: FaUsers, text: "44 a 50 Lugares" },
      { icon: MdAirlineSeatReclineNormal, text: "Poltronas reclináveis" },
      { icon: BsSnow, text: "Ar condicionado" },
      { icon: FaBluetoothB, text: "Bluetooth" },
      { icon: FaUsb, text: "USB" },
      { icon: CgSmartHomeRefrigerator, text: "Frigobar" },
      { icon: FaSuitcaseRolling, text: "Bagageiro Amplo" },
    ],
    img: "/imagens/bus-card.png", // Caminho corrigido
    imgHover: "/imagens/bus-blur.png", // Exemplo de imagem para hover+
  },
  {
    id: 2,
    name: "Micro-ônibus",
    features: [
      { icon: FaUsers, text: "28 a 33 Lugares" },
      { icon: MdAirlineSeatReclineNormal, text: "Poltronas reclináveis" },
      { icon: BsSnow, text: "Ar condicionado" },
      { icon: FaBluetoothB, text: "Bluetooth e USB" },
      { icon: CgSmartHomeRefrigerator, text: "Frigobar" },
      { icon: FaSuitcaseRolling, text: "Bagageiro" },
      { icon: FaRestroom, text: "Banheiro (WC)" },
    ],
    img: "/imagens/micro.png", // Caminho correto
    imgHover: "/imagens/micro-blur.png", // Exemplo de imagem para hover
  },
  {
    id: 3,
    name: "Van Executiva",
    features: [
      { icon: FaUsers, text: "15 a 20 Lugares" },
      { icon: MdAirlineSeatReclineNormal, text: "Poltronas reclináveis" },
      { icon: BsSnow, text: "Ar condicionado" },
      { icon: FaBluetoothB, text: "Bluetooth" },
      { icon: FaUsb, text: "Tomadas USB" },
      { icon: FaSuitcaseRolling, text: "Bagageiro" },
    ],
    img: "/imagens/van.png", // Caminho correto
    imgHover: "/imagens/van-blur.png", // Exemplo de imagem para hover
  },
  {
    id: 4, // ID corrigido de 3 para 4
    name: "Carro Executivo",
    features: [
      { icon: FaUsers, text: "Até 6 Lugares" },
      { icon: GiCarSeat, text: "Bancos de couro" },
      { icon: BsSnow, text: "Ar condicionado digital" },
      { icon: FaBluetoothB, text: "Bluetooth e Multimídia" },
    ],
    img: "/imagens/carro.png", // Caminho correto
    imgHover: "/imagens/carro-blur.png", // Exemplo de imagem para hover
  },
];
