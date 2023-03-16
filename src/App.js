import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Footer from "./components/Footer";
import NavBar from "./components/navs/NavBar";
import "./custom.css";
import CustomerForm from "./pages/customer/CustomerForm";
import CustomerList from "./pages/customer/CustomerList";
function App() {
  return (
    <div>
      <div className="container ">
        <NavBar />
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 px-5">
            <h1 className="mb-3">Add Customer</h1>
            <CustomerForm />
          </div>
          <div className="col-md-6">
            <h1 className="mb-3"> Customer List</h1>
            <CustomerList />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
