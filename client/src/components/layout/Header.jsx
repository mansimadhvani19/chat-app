import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState, lazy } from 'react'
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Notifications as NotificationsIcon } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'
// import SearchDialog from "../specific/Search"

const SearchDialog = lazy(() => import("../specific/Search"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));

const Header = () => {

    const navigate = useNavigate();
    const [ismobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, SetIsNewGroup] = useState(false);
    const [isNotification, SetIsNotification] = useState(false);

    const handleMobile = () => {
        setIsMobile((prev) => !prev);
    };

    const openSearch = () => {
        setIsSearch((prev) => !prev);
    };
    const openNewGroup = () => {
        SetIsNewGroup((prev) => !prev);
    };
    const openNotification = () => {
        SetIsNotification((prev) => !prev);
    };
    const navigateToGroup = () => navigate("/groups");
    const logoutHandler = () => {
        console.log("Logout")
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar
                    position='static'
                    sx={{
                        bgcolor: "#ea7070",
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant='h6'
                            sx={{
                                display: { xs: "none", sm: "block" }
                            }}
                        >
                            CHAT APP
                        </Typography>
                        <Box sx={{
                            display: { xs: "block", sm: "none" }
                        }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{
                            flexGrow: 1,
                        }} />
                        <Box>
                            <IconBtn title={"Search"} icon={<SearchIcon />} onClick={openSearch} />
                            <IconBtn title={"New Group"} icon={<AddIcon />} onClick={openNewGroup} />
                            <IconBtn title={"Manage Group"} icon={<GroupIcon />} onClick={navigateToGroup} />
                            <IconBtn title={"Notification"} icon={<NotificationsIcon />} onClick={openNotification} />
                            <IconBtn title={"Logout"} icon={<LogoutIcon />} onClick={logoutHandler} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {
                isSearch && (<Suspense fallback={<Backdrop open/>}> <SearchDialog /> </Suspense>)

            }
            {
                isNotification && (<Suspense fallback={<Backdrop open/>}> <NotificationsDialog /></Suspense>)
            }
            {
                isNewGroup && (<Suspense fallback={<Backdrop open/>}> <NewGroupDialog /> </Suspense>)

            }
        </>
    )
}

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color='inherit' size="large" onClick={onClick}>
                {icon}
            </IconButton>

        </Tooltip>
    );
}
export default Header