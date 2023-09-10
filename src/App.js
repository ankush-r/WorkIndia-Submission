import logo from './logo.svg';
import './App.css';
import CandidateCard from './Components/Card';
import { useEffect, useMemo, useState } from 'react';
import CandidateColumn from './Components/Column';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          console.error("Some error occurred");
          return;
        }

        const mockData = await response.json();
        setData(mockData.data); // Set the data directly

        setLoading(false);

        console.log(mockData.data); // Log the data here
        // console.log(statusStates);
        // console.log("here");

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function

  }, [loading]);



  return (
    <div className="App">

      {!loading &&

        (
          <div className='m-2 ms-5 mt-4 d-flex align-items-start justify-content-start gap-5 '>
            <CandidateColumn name="Applied" candidates={data.filter(x => x.status == "Applied")} />
            <CandidateColumn name="Accepted" candidates={data.filter(x => x.status == "Accepted")} />
            <CandidateColumn name="Rejected" candidates={data.filter(x => x.status == "Rejected")} />
          </div>
        )
      }

    </div>
  );
}

export default App;
