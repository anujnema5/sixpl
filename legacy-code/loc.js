export default function Loc(props) {
    const location = props.location;
    return (
      <div style={{ width: '100vw', height: '100vh', padding: 30 }}>
        <h1>
          Your location is <span style={{ color: 'blue' }}>{location.city}</span>
        </h1>
      </div>
    );
  }
  
  export async function getServerSideProps(context) {
    let ip;
  
    const { req } = context;

    
  
    if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(',')[0];
    } else if (req.headers['x-real-ip']) {
      ip = req.connection.remoteAddress;
    } else {
      ip = req.connection.remoteAddress;
    }
  
    console.log(ip);

    const response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=5056347f62514641ae0a382e31a4a2a3&ip_address=${ip}`);
    const data = await response.json();

  // Extract the user's location data from the API response
  const location = {
    city: data.city,
    region: data.region,
    country: data.country,
    latitude: data.latitude,
    longitude: data.longitude
  };
    return {
      props: {
        location,
      },
    };
  }