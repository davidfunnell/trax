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
                      <li><NavLink className="dropdown-item" aria-current="page" to="manufacturers/">Manufacturers</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="models/">Models</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="automobiles/">Automobiles</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="manufacturers/new/">Add a manufacturer</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="models/new/">Add a model</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="automobiles/new/">Add an automobile</NavLink></li>
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
                      <li><NavLink className="dropdown-item" aria-current="page" to="customers/new/">New Customer</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="salespersons/new/">New Employee</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="salerecords/new/">New Sales Record</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="salerecords/">All Sales Records</NavLink></li>
                      <li><NavLink className="dropdown-item" aria-current="page" to="salerecords/filter/">Sales by employee</NavLink></li>
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

