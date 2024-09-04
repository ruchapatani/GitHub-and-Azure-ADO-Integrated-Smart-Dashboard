import * as React from 'react';
import "./page-not-found.scss";
import { Button } from "@progress/kendo-react-buttons";
import { useNavigate } from "react-router";

export function PageNotFound() {
    const navigate = useNavigate();

    const redirect = () => {
        if (true) {
            navigate('/', { replace: true });
        } else {
            navigate('/login', { replace: true });
        }
    }
    return (
        <>
            <div className="pnf-grid">

                <div className="pnf-card">
                    <h2 className="pnf-title">Page Requested for Does not exist</h2>
                    <Button onClick={redirect} className="pnf-button" themeColor={'primary'}> Go Back  </Button>
                </div>
            </div>
        </>
    );
}
