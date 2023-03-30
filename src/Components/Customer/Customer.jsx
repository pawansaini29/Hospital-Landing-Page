import React,{useState, useEffect} from 'react'
import { CustomerReview } from '../CustomerReview/CustomerReview'
import './Customer.css'
import patient1 from '../../Assets/patient1.png'
import patient2 from '../../Assets/patient2.png'
import axios from 'axios';


export const Customer = () => {

  // const [joke, setJoke] = useState("loading..");

  // useEffect(() => {

  //   fetch('https://admin.tomedes.com/api/v1/get-reviews?page=1')
  //     .then(res => res.json())
  //     .then(res2 => {
  //       console.log(res2)
  //       setJoke(res2.data)
  //     }
  //     )
  // }, [])

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
      .then((response) => {
        // setReviews(response.data.data.slice(0, 2));
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  // return (
  //   <div className="App">
  //     <div className='container'>
  //       <h1>Fetching Random Jokes</h1>
        
  //       <h4>{joke.Reviews}</h4>
  //       <h3>{joke.Name}</h3>
  //     </div>
  //   </div>
  // );

  return (
    <div className='customer-container'>
        <div className="customer-heading">
        <h1>What Our Customers Say</h1>
        </div>
        <div className="customer-review">
            <div className="customer-review1">
            <CustomerReview img={patient1} heading={reviews[1].Reviews} name={reviews[1].Name} patient="Patient" />
            </div>
            <div className="customer-review1">
            <CustomerReview img={patient2} heading={reviews[4].Reviews} name={reviews[4].Name} patient="Patient" />
            </div>
        </div>

        {/* <div className="customer-review">
        {reviews.map((review) => (
          <div className="customer-review1" key={review.ID}>
          <CustomerReview img={patient2} heading={review.Reviews} name={review.Name} patient="Patient" />
          </div>
        // <div className="bg-white rounded-lg shadow p-6" key={review.ID}>
        //   <h2 className="text-lg font-bold">{review.Name}</h2>
        //   <p className="text-gray-600 mt-2">{review.Reviews}</p>
        // </div>
      ))}

        </div> */}
    </div>
  )
}


