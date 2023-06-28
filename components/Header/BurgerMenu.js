import MenuIcon from "@mui/icons-material/Menu";
import { Box, Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { pages } from "../Header/NavPanel";
import Link from "next/link";

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
            width: "50%",
            backgroundColor: "#fafafa",
            color: "#4A0A09",
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
          <List sx={{ paddingTop: "100px" }}>
            <Divider />
            {pages.map((el) => (
              <>
                <ListItem key={el.id} sx={{ paddingBottom: "30px" }}>
                  <Link href={el.path}> {el.title}</Link>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default BurgerMenu;
