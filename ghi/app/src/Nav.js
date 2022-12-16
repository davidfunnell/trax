import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <nav className="navbar navbar-expand-lg navbar-dark bg-">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to>Inventory</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><NavLink className="dropdown-item" aria-current="page" to="inventory/manufacturers/">Manufacturers</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="inventory/models/">Models</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="inventory/automobiles/">Automobiles</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="inventory/manufacturer_form/">Add a manufacturer</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="inventory/model_form/">Add a model</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="inventory/automobile_form/">Add an automobile</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-dark bg-">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to>Sales</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><NavLink className="dropdown-item" aria-current="page" to="sales/customer_form/">Add a Customer</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="sales/salesperson_form/">Add a Sales Person</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="sales/sales_form/">Create a Sale Record</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="sales/all_sales/">See All Sales</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="sales/filter_sales/"> See All Sales by Sales Person</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-dark bg-">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to>Service</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><NavLink className="dropdown-item" aria-current="page" to="service/appointment/">New Service Appointment</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="service/all_appointments/">See All Appointments</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="service/vin_appointments/">See All Appointments by Vin</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="service/technician/">Add a Technician</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-dark bg-">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to>Data</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <div className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                      <li><NavLink className="dropdown-item" aria-current="page" to="data/services/">Service data</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
