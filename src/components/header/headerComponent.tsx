import React, { useEffect } from "react";
import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
    Drawer,
    DrawerContent,
    DrawerSelectEvent,
    Menu,
    MenuItem,
} from "@progress/kendo-react-layout";
import { Notification } from "@progress/kendo-react-notification";
import "./headerComponent.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../utils/commonUtil";
import { bellIcon, calendarIcon, inboxIcon, menuIcon } from "@progress/kendo-svg-icons";
import { Button } from "@progress/kendo-react-buttons";

export interface NotificationProp {
    type: {
        style: string;
        icon: boolean;
    };
    duration: number;
    text: string;
    show: boolean;
}

export const defaultNotification: NotificationProp = {
    type: {
        style: "success",
        icon: true,
    },
    duration: 3000,
    text: "",
    show: false,
};


export function HeaderComponent(props) {
    const navigate = useNavigate();
    const [showNotication, setShowNotication] = React.useState(false);
    const [notificationProps, setNotificationProps] =
        React.useState(defaultNotification);
    const notificationPosition = {
        top: 0,
        left: 0,
        alignItems: "flex-start",
        color: "white",
    };



    const location = useLocation();
    const baseRoute = "/login";

    useEffect(() => {
        window.addEventListener("notification", notificationdHandler);
        return () =>
            window.removeEventListener("notification", notificationdHandler);
    }, []);

    const notificationdHandler = (event: any) => {
        if (event.detail.notificationMessage !== "") {
            setNotificationProps({
                ...defaultNotification,
                text: event.detail.notificationMessage,
            });

            setShowNotication(true);

            setTimeout(() => {
                setShowNotication(false);
            }, 3000);
        }
    };

    const resetCommonNotification = () => {
        setShowNotication(false);
    };

    const goToDashboard = () => {
        navigate("/", { replace: true });
    };

    const onUserMenuSelect = (event: any) => {
        if (event.item.text === "Logout") {
            logout();
            navigate(event.item.data.route, { replace: true });
        }
    };

    const handleClick = () => { props.drawerClicked()};


    const UserMenu = (
        <Avatar
            style={{ backgroundColor: "#EFF0F3", color: "#000000" }}
            fillMode={"solid"}
            type="text"
            size="medium"
        >
            <span>User Name</span>
        </Avatar>
    );

    return (
        <>
            {/* The location is checked to decide if it is login page or dashboard */}
            {location.pathname !== baseRoute && (

                <AppBar className="header" positionMode={"sticky"}>
                    <AppBarSpacer style={{ width: 4 }} />
                    <div id="drawer">
                        <Button svgIcon={menuIcon} fillMode="flat" onClick={handleClick} />
                    </div>
                    <AppBarSection>
                        <h1 className="title" onClick={goToDashboard}>
                            Rucha Github/ADO App
                        </h1>
                    </AppBarSection>

                    <AppBarSpacer style={{ width: 32 }} />
                    <AppBarSection></AppBarSection>
                    <AppBarSpacer style={{ width: 32 }} />
                    <AppBarSpacer />
                    <AppBarSection>
                        {showNotication && (
                            <Notification
                                type={notificationProps.type}
                                closable={true}
                                onClose={resetCommonNotification}
                                style={notificationPosition}
                            >
                                <span>{notificationProps.text}</span>
                            </Notification>
                        )}
                    </AppBarSection>
                    {/* <AppBarSpacer style={{ width: 32 }} /> */}
                    <AppBarSpacer />
                        <AppBarSection>
                            <Menu onSelect={onUserMenuSelect}>
                                <MenuItem data={{}}>
                                    <MenuItem
                                        key="avatar-2"
                                        text="Logout"
                                        data={{ route: "/login" }}
                                    />
                                </MenuItem>
                            </Menu>
                        </AppBarSection>
                </AppBar>
            )}
        </>
    );
}
