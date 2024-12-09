import { List, ListItem } from "@mui/material";

const navItems = ["Início", "Especialidades", "Casos", "Depoimentos"]
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
                <ListItem key={item} sx={{ width: "max-content", cursor: "pointer", fontFamily: "Georgia", opacity: 0.6 }}>{item}</ListItem>
            ))}
        </List>
    )
}