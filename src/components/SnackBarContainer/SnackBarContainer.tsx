import { Alert, Snackbar } from "@mui/material";
import { SnackBarContainerProps } from "./interface/SnackBar.interface";

const SnackBarContainer = ({isOpen, onClose}: SnackBarContainerProps) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={onClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >
                Good was added to the basket!
            </Alert>
        </Snackbar>
    );
};

export { SnackBarContainer } 
