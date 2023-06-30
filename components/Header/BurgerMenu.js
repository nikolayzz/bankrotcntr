import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { pages } from "../Header/NavPanel";
import Link from "next/link";
import LogoHeader from "./LogoHeader";
import Image from "next/image";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (key) => {
    setOpen(key);
  };

  return (
    <>
      <button onClick={() => toggleDrawer(true)}>
        <MenuIcon fontSize="large" />
      </button>
      <SwipeableDrawer
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#843332",
            color: "#fafafa",
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
        anchor="right"
        open={open}
        onOpen={() => toggleDrawer(true)}
        onClose={() => toggleDrawer(false)}
      >
        <Box onClick={() => toggleDrawer(false)}>
          <div className="bg-[#fafafa]">
            <Image
              src="/images/m-logo.png"
              height={100}
              width={100}
              className="h-auto w-auto m-auto"
              alt="logo"
              priority
            />
          </div>

          <List sx={{ paddingTop: "30px" }}>
            {/* <Divider /> */}
            {pages.map((el) => (
              <div key={el.id}>
                <ListItem sx={{ paddingBottom: "30px" }}>
                  <Link className="w-full" href={el.path}>
                    {el.title}
                  </Link>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default BurgerMenu;
