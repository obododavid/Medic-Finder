import React, { useState, Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHomeStyles } from './style';
import hospital from '../../assets/hospital.jpg';
import GoogleSearchTab from '../../components/GoogleSearchTab';
import Locations from '../../components/Locations';
import Header from '../../components/Header';


const Home = () => {
  const classes = useHomeStyles();
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [radius, setRadius] = useState(null)
  const [showMap, setShowMap] = useState(false)

  const handleGetHospitals = (latitude: number, longitude: number, radius: number) => {
    setLatitude(latitude)
    setLongitude(longitude)
    setRadius(radius)
    setShowMap(true)
  }

  const handleReturnToSearchPage = () => {
    // setLatitude(prevState => {
    //   return null
    // }),
    //   setLongitude(null)
    // setRadius(null)
    setShowMap(false)
  }

  return (
    <Fragment>
      <Header />
      <Container
        maxWidth={false}
        className={classes.container}
        style={{
          // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hospital})`,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1512677859289-868722942457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

        <Typography component="h1" className={classes.title}>Find Hospitals</Typography>
        <GoogleSearchTab onSubmit={handleGetHospitals} />
      </Container>
      {showMap && <Locations latitude={latitude} longitude={longitude} radius={radius} onReturn={handleReturnToSearchPage} />}
    </Fragment>
  );
}

export default Home
