import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import LightIcon from '@mui/icons-material/Light';
import LightTwoToneIcon from '@mui/icons-material/LightTwoTone';
import LightOutlinedIcon from '@mui/icons-material/LightOutlined';

const ButtonsConfig = [
  {
    text: "ON/OFF",
    icon: <PowerSettingsNewIcon />,
    code: "FF02FD"
  },
  {
    text: "Rojo",
    icon: <ColorLensIcon />,
    code: "FF1AE5"
  },
  {
    text: "Green",
    icon: <ColorLensIcon />,
    code: "FF9A65"
  },
  {
    text: "Blue",
    icon: <ColorLensIcon />,
    code: "FFA25D"
  },
  {
    text: "White",
    icon: <ColorLensIcon />,
    code: "FF22DD"
  },
  {
    text: "Low",
    icon: <LightIcon />,
    code: "FF32CD"
  },
  {
    text: "Medium",
    icon: <LightTwoToneIcon />,
    code: "FFF807"
  },
  {
    text: "High",
    icon: <LightOutlinedIcon />,
    code: "FFD827"
  }
];

export default ButtonsConfig;