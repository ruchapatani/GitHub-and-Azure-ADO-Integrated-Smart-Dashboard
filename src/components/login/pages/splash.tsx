import './splash.scss';
import React, { useEffect } from 'react';
import { AuthContextType, AuthContext } from '../../../contexts/AuthContext';
import { Button } from '@progress/kendo-react-buttons';
import { useNavigate } from 'react-router-dom';

function SplashComponent() {
    const { login } = React.useContext(AuthContext) as AuthContextType;
    const [isMobile, setIsMobile] = React.useState(false);
    const navigate = useNavigate();

    const loginFromSplash = () => {
        login();
    }

    useEffect(() => {
        if (true) {
            navigate('/'); // navigate to home page
        }
    });

    return (
        <>
            {isMobile !== null && (
                <>
                    {!isMobile ? (
                        <div className="login-grid">
                            <div className="login-rside">
                            </div>
                            <div className="login-fside">
                                <h2 className="login-title">Rucha GitHub/ADO Demo App</h2>
                                <Button onClick={loginFromSplash} className="login-button" themeColor={'primary'}> Log in  </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="login-grid-mobile">
                            <div className="login-mobile">
                                <Button onClick={loginFromSplash} className="login-button" themeColor={'primary'} >   Log in  </Button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default SplashComponent;