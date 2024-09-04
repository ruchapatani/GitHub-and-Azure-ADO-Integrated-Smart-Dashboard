import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Drawer, DrawerContent, DrawerSelectEvent } from '@progress/kendo-react-layout';
import { homeIcon, heartIcon, dataIcon, chartAreaStackedIcon } from '@progress/kendo-svg-icons';
import "./drawerroutecontainer.scss";

const items = [
    { text: 'Home', svgIcon: homeIcon, selected: true, route: '/' },
    { separator: true },
    { text: 'Repositories', svgIcon: dataIcon, route: '/repositories' },
    { text: 'Ado Stats', svgIcon: heartIcon, route: '/adostats' },
];

const DrawerRouterContainer = (props) => {
    const navigate = useNavigate();

    const [selected, setSelected] = React.useState(
        items.findIndex((x) => x.selected === true)
    );


    const onSelect = (e: DrawerSelectEvent) => {
        navigate(e.itemTarget.props.route);
        setSelected(e.itemIndex);
    }

    return (
        <div>
            <Drawer
                expanded={props.expanded}
                position={'start'}
                mode={'push'}
                mini={true}
                items={items.map((item, index) => ({
                    ...item,
                    selected: index === selected
                }))}
                onSelect={onSelect}
            >
                <DrawerContent>
                    {props.children}
                </DrawerContent>
            </Drawer>
        </div >
    );
}

export default DrawerRouterContainer;
