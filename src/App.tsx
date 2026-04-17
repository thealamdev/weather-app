import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import { webApi } from './api/service';

function App() {
  const [events, setEvents] = useState();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await webApi.get('/programs');
        if (response && response.data) {
          setEvents(response?.data?.payload)
        }
      } catch (err) {
        return err;
      }

    }
    fetchEvents();
  }, [])
  return (
    <div className='container mx-auto'>
      <Header />
      <pre>
        {JSON.stringify(events, null, 2)}
      </pre>
    </div>
  )
}

export default App
