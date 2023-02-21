import { Box } from '@mui/system';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Button from '@mui/material/Button';

const LeftSideMain = () => {
    return (
        <Box sx={{ display: { xs: "none", md: "block" } }}>

            <Box sx={{ border: "2px solid lightGray", backgroundColor: "white", borderRadius: "1em", marginRight: "1.5em", height: '19em' }}>

                <Box sx={{ ml: "2em", mt: "1em", alignItems: "center" }}>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "20px 0em" }}> <BookmarkIcon /> My Jobs </p>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "20px 0em" }}> <NotificationsActiveIcon /> Job Alerts </p>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "20px 0em" }}> <FileDownloadDoneIcon /> Demonstrate Skill </p>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "20px 0em" }}> <AssignmentIcon /> Interview Prep </p>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "20px 0em" }}> <DocumentScannerIcon /> Resume Builder </p>
                    <p style={{ display: "flex", alignItems: "center", color: "gray", margin: "20px 0em" }}> <YouTubeIcon /> Job Seeker Guidance </p>

                </Box>


            </Box>
            
            <Button variant='outlined' sx={{ color: "#FF3131", border: "1px solid #FF3131", mt: "1em", borderRadius: "2em", width: "17.5em" }} size="large"> <SaveAsIcon /> Post a free job</Button>
        </Box>
    );
};

export default LeftSideMain;