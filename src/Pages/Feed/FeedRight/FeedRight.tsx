import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider/Divider";
import AddIcon from "@mui/icons-material/Add";
const FeedRight = () => {
  const datas = [
    {
      name: "Cefalo Bangladesh Ltd.",
      image:
        "https://media.licdn.com/dms/image/C510BAQFkFILG8PzgsQ/company-logo_100_100/0/1567108127826?e=1684972800&v=beta&t=auE6CJHoG5qHua04DzJqNCYush_YaBbWAh4dIagycn4",
      type: "Company | Information, Technology & Service",
    },
    {
      name: "Craftsmen",
      image:
        "https://media.licdn.com/dms/image/C510BAQHawE70r1SnSw/company-logo_100_100/0/1557478665329?e=1684972800&v=beta&t=WUY5mO7FTInC6JILVhwKr9MTtupujulAJeKIPm6R330",
      type: "Company | Information, Technology & Service",
    },
    {
      name: "DICE",
      image:
        "https://media.licdn.com/dms/image/C560BAQEYK67Tel_mng/company-logo_100_100/0/1624162747433?e=1684972800&v=beta&t=LJNIuGpi3IAG13zWPFAPCbPmSj2mnut6XmG3OLGxw00",
      type: "Company | Information",
    },
  ];

  return (
    <Box sx={{ display: { xs: "none", md: "block" }, mt: "1.5em" }}>
      <Box
        sx={{
          border: "2px solid lightGray",
          backgroundColor: "white",
          borderRadius: "1em",
          height: "27.5em",
        }}
      >
        <Box sx={{}}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", p: "1em" }}>
            Add to your feed
          </Typography>

          {datas.map((data, i) => (
            <Box key={i}>
              <Box sx={{ display: "flex", p: ".5em 1em" }}>
                <img
                  style={{
                    width: "2.5em",
                    height: "2.5em",
                    borderRadius: "100%",
                  }}
                  src={data.image}
                  alt=""
                />
                <Box sx={{ ml: "1em" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", m: 0, p: 0 }}
                  >
                    {data.name}
                  </Typography>
                  <Typography variant="caption" sx={{ m: 0, p: 0 }}>
                    {data.type}
                  </Typography>

                  <Button sx={{ m: ".3em 0" }} size="small" variant="outlined">
                    <AddIcon />
                    Follow
                  </Button>
                </Box>
              </Box>

              <Divider />
            </Box>
          ))}
        </Box>

        <Button fullWidth variant="text" sx={{ p: ".5em", color: "gray" }}>
          See All
        </Button>
      </Box>
    </Box>
  );
};

export default FeedRight;
