import React from 'react';
import SupportArea from '../SupportArea/SupportArea';
import { Route, Routes } from 'react-router-dom'


const NewRoutes = ({ supportCategories }) => {

    return (
        <Routes>
            <Route
                path='/'
                element={<SupportArea supportCategories={supportCategories} />}
            />
        </Routes>
    );
};

export default NewRoutes;