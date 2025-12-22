import { useEffect, useState } from "react";

const App = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <h1>Subscription Services</h1>

      {services.map(service => (
        <div key={service.id}>
          <h3>{service.name}</h3>
          <img src={service.thumbnail} alt="" />
          <p>Price: ${service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
