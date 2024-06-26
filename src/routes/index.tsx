import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routesConfig from './routers.json';
import Loading from '../pages/Other/Loading';
import Error from '../pages/Other/Error';

const lazyLoad = (componentName: string) => {
    return lazy(() => import(`../pages/${componentName}`));
};

const RoutesComponent: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {routesConfig.map((route, index) => {
                        const Component = lazyLoad(route.component);
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Component />}
                                index={route.exact}
                            />
                        );
                    })}
                    <Route path='/' element={<Navigate to="/home/" />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default RoutesComponent;