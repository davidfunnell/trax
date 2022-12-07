import { NavLink, Outlet } from 'react-router-dom';

function ServicePage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service/appointment">Create a service appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service/technician">Create a technician</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service/all_appointments">See all appointments</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service/vin_appointments">See all appointments by vin</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default ServicePage;
