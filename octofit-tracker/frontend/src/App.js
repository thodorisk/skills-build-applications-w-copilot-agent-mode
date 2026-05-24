import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body text-center">
                <img src={logo} className="App-logo mb-3" alt="logo" />
                <h1 className="card-title display-5 mb-3">Welcome to <span className="text-primary">OctoFit Tracker</span></h1>
                <p className="card-text lead mb-4">
                  Track your fitness, join teams, and compete on the leaderboard!
                </p>
                <a className="btn btn-primary btn-lg mb-3" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
                </a>
                {/* Example Bootstrap Table */}
                <h2 className="h4 mt-4">Sample Activity Table</h2>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered mt-2">
                    <thead className="table-primary">
                      <tr>
                        <th>Date</th>
                        <th>Activity</th>
                        <th>Duration (min)</th>
                        <th>Calories</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2026-05-24</td>
                        <td>Running</td>
                        <td>30</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td>2026-05-23</td>
                        <td>Cycling</td>
                        <td>45</td>
                        <td>400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Example Bootstrap Modal Trigger */}
                <button type="button" className="btn btn-outline-secondary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Show Info Modal
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">About OctoFit Tracker</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        This is a demo modal using Bootstrap. You can use modals for notifications, forms, and more!
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Example Bootstrap Form */}
                <form className="mt-4">
                  <h2 className="h5 mb-3">Quick Log Activity</h2>
                  <div className="mb-3">
                    <label htmlFor="activity" className="form-label">Activity</label>
                    <input type="text" className="form-control" id="activity" placeholder="e.g. Running" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Duration (min)</label>
                    <input type="number" className="form-control" id="duration" placeholder="e.g. 30" />
                  </div>
                  <button type="submit" className="btn btn-success">Log Activity</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
