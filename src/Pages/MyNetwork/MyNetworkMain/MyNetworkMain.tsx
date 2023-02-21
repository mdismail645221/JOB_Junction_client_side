import React from "react";
import { Box, Stack, Avatar } from "@mui/material";
import {
  ACCEPTIGNORE,
  INVITATION,
  PROFILEINFOACCEPT,
  SHOWMOREBTN,
} from "./MyNetwork.styled";

const MyNetworkMain = () => {
  return (
    <div>
      <h1>this is my network</h1>
      <Stack>
        <INVITATION>
          <h5>Invitations</h5>
          <h5>See all 5</h5>
        </INVITATION>
        {/* Accept or ignore area */}
        <PROFILEINFOACCEPT>
          {/* profile img or degecnation */}
          <Box
            sx={{
              display: "flex",
              padding: "1.50rem 0",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://i.ibb.co/4MnMYkJ/Joseph-Gray.png"
            />
            <Stack sx={{ marginLeft: "10px" }}>
              <h5>
                Member’s name Jewel Hossain Fahim follows you and is inviting
                you to connect
              </h5>
              <h6>Front end developer | Mean stack web developer</h6>
            </Stack>
          </Box>

          {/* accept or ignore btn */}

          <ACCEPTIGNORE direction="row" spacing={3}>
            <button className="accept-btn">Accept</button>
            <button className="ignore-btn">ignore</button>
          </ACCEPTIGNORE>
        </PROFILEINFOACCEPT>
        {/* Accept or ignore area */}
        <PROFILEINFOACCEPT>
          {/* profile img or degecnation */}
          <Box
            sx={{
              display: "flex",
              padding: "1.50rem 0",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://i.ibb.co/4MnMYkJ/Joseph-Gray.png"
            />
            <Stack sx={{ marginLeft: "10px" }}>
              <h5>
                Member’s name Jewel Hossain Fahim follows you and is inviting
                you to connect
              </h5>
              <h6>Front end developer | Mean stack web developer</h6>
            </Stack>
          </Box>

          {/* accept or ignore btn */}

          <ACCEPTIGNORE direction="row" spacing={3}>
            <button className="accept-btn">Accept</button>
            <button className="ignore-btn">ignore</button>
          </ACCEPTIGNORE>
        </PROFILEINFOACCEPT>
        {/* Accept or ignore area */}
        <PROFILEINFOACCEPT>
          {/* profile img or degecnation */}
          <Box
            sx={{
              display: "flex",
              padding: "1.50rem 0",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://i.ibb.co/4MnMYkJ/Joseph-Gray.png"
            />
            <Stack sx={{ marginLeft: "10px" }}>
              <h5>
                Member’s name Jewel Hossain Fahim follows you and is inviting
                you to connect
              </h5>
              <h6>Front end developer | Mean stack web developer</h6>
            </Stack>
          </Box>

          {/* accept or ignore btn */}

          <ACCEPTIGNORE direction="row" spacing={3}>
            <button className="accept-btn">Accept</button>
            <button className="ignore-btn">ignore</button>
          </ACCEPTIGNORE>
        </PROFILEINFOACCEPT>

        <SHOWMOREBTN sx={{ display: "grid", placeItems: "center" }}>
          <button>
            <a href="/">Show more..</a>
          </button>
        </SHOWMOREBTN>
      </Stack>
    </div>
  );
};

export default MyNetworkMain;
