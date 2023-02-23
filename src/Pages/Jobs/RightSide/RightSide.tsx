import { Box } from '@mui/system';

const RightSide = () => {
    return (
        <Box sx={{ display: { xs: "none", md: "block" }, border: "2px solid lightGray", backgroundColor: "white", borderRadius: "1em", marginLeft: "1.5em", p: "0 1em", height: "20em" }}>

            <p style={{ marginTop: '1em', fontSize: "17px", fontWeight: "700" }}>Safety tips for your job search</p>
            <img style={{ width: "14em" }} src="https://media.tenor.com/xnDaTMFs4f0AAAAC/security-shield.gif" alt="" />
            <p style={{ fontSize: '15px' }}>Job-Junction is committed to your safety as you find your next big opportunity.</p>

        </Box>
    );
};

export default RightSide;