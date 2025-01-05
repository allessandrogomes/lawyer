import { Button } from "@mui/material"
import { Link } from "react-scroll"

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
            <Link
                role="button"
                aria-label="Scroll to respective Section"
                style={{ display: 'block', height: '26px' }}
                to="form"
                spy
                smooth
                duration={500}
                offset={-80}
            >Consulte-nos</Link>
        </Button>
    )
}