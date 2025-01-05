import { List, ListItem } from "@mui/material"
import { Link } from "react-scroll"

const navItems = [
    {
        text: "Início",
        offset: -80,
        to: "inicio"
    },
    {
        text: "Especialidades",
        offset: -80,
        to: "especialidades"
    },
    {
        text: "Casos",
        offset: -80,
        to: "casos"
    },
    {
        text: "Depoimentos",
        offset: -80,
        to: "depoimentos"
    }
]
const sidebarStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    color: "#000000"
}

interface INav {
    sidebar?: boolean;
}

export default function Nav({ sidebar }: INav) {
    return (
        <List sx={sidebar ? sidebarStyle : { display: { xs: "none", md: "flex" }, gap: "10px", color: "#000000" }}>
            {navItems.map(item => (
                <ListItem key={item.to} sx={{ width: "max-content", cursor: "pointer", fontFamily: "Georgia", opacity: 0.6 }}>
                    <Link
                        role="button"
                        aria-label="Scroll to respective Section"
                        style={{ display: 'block', height: '26px' }}
                        to={item.to}
                        spy
                        smooth
                        duration={500}
                        offset={item.offset}
                    >{item.text}</Link>
                </ListItem>
            ))}
        </List>
    )
}