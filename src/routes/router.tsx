import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from '../router-guards/requireAuth';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

export type Route = {
    element: React.FunctionComponent;
    path: string;
};

const Router: React.FunctionComponent<{
    publicRoutes: Route[];
    privateRoutes: Route[];
}> = ({ publicRoutes, privateRoutes }) => {

    return (
        <>
            <Routes>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}

                <Route element={<RequireAuth />}>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Route>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Router;