import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * Higher Order Component (HOC) para conectar el componente a Redux
 */
const ReduxWrapper = (WrappedComponent) => {
    return function ReduxConnectedComponent(props) {
        // Selecciona el estado que necesitas desde Redux
        const appState = useSelector((state) => state.theme); // Ajusta esto a tu slice de estado
        const dispatch = useDispatch();

        // Pasas el estado de Redux como props adicionales al componente envuelto
        return <WrappedComponent {...props} appState={appState} dispatch={dispatch} />;
    };
};

export default ReduxWrapper;