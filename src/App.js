
import './App.css';
import Weather from './weather';
function App() {
  return (
    <div className="App">
        <div class="container">
                <div class="Weather"><a href="https://www.shecodes.io/" target="_blank" rel="noopener noreferrer"><img
                            src="/images/logo.png" class="logo" alt="SheCodes Logo"/></a>
                    <form>
                        <div class="row">
                            <div class="col-9 ">
                              <input type="search" placeholder="Enter a city.."
                                    class="form-control search-input"/></div>
                            <div class="col-3 p-0"><input type="submit" class="btn btn-primary w-100" value="Search"/>
                            </div>
                        </div>
                    </form>
      <Weather/>
    </div>
    </div>
    </div>
  );
}

export default App;
