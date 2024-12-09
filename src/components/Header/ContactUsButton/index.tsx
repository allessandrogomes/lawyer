import { Button } from "@mui/material";

interface IContactUsButton {
    sidebar?: boolean;
}

const sidebarStyle = {
    backgroundColor: "#50223C",
    textTransform: "initial",
    fontWeight: "100",
    fontFamily: "Georgia"
}

export default function ContactUsButton({ sidebar }: IContactUsButton) {
    return (
        <Button
            variant="contained"
            sx={sidebar ? sidebarStyle : { display: { xs: "none", md: "block" }, backgroundColor: "#50223C", textTransform: "initial", fontWeight: "100", fontFamily: "Georgia" }}
        >
            Consulte-nos
        </Button>
    )
}