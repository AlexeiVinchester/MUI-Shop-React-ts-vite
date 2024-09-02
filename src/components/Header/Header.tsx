import { ShoppingBasket } from "@mui/icons-material"
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"
import { HeaderProps } from "./interface/Header.interface"

const Header = ({ onClickBasket, orderLength }: HeaderProps) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1 }}
                >
                    Mui Shop
                </Typography>
                <IconButton
                    onClick={onClickBasket}
                    color="inherit"
                >
                    <Badge 
                        color="secondary"
                        badgeContent={orderLength}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export { Header }
