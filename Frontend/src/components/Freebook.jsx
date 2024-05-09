import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2 tag_2">Explore Our Free Courses</h1>
          <p className="p_1">
          We make that dream a reality! We offer a wide variety of dance courses for all ages and skill levels, from complete beginners to seasoned dancers looking to refine their technique. Whether you're interested in mastering the classic elegance of ballet, the infectious energy of hip hop, the rhythmic passion of salsa, or any style in between, we have a class for you. Our passionate and experienced instructors create a fun and supportive learning environment where you can learn at your own pace. We believe dance is about more than just steps; it's about self-expression, building confidence, and finding joy in movement. Join us and discover the transformative power of dance!
          </p>
        </div>

        <div>
        <div className="container">
          <div className="row align-items-center row_1">
            <div className="col">
              <div className="card" style={{width: '18rem'}}>
                <img src="https://d33wubrfki0l68.cloudfront.net/a6653ea8bf57d11915d13136219664404b1c750a/81d4c/img/blog_page_img_7.png" className="card-img-top" alt="BHaratnatyam" />
                <div className="card-body">
                  <h5 className="card-title">Bharatnatyam</h5>
                  <p className="card-text">Bharatnatyam, India's oldest classical dance form, captivates with expressive storytelling through graceful poses, intricate footwork, and rhythmic hand gestures.</p>
                  <a href="#" className="btn btn-primary btn_2">View Course</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: '18rem'}}>
                <img src="https://media.istockphoto.com/id/157570818/photo/hip-hop-dancer-standing-on-his-toes.jpg?s=612x612&w=0&k=20&c=bmlRLRdApufNq-BuVfOs6FacPxKswhUNSpwqUxn4JzM=" className="card-img-top" alt="Hip Hop" />
                <div className="card-body">
                  <h5 className="card-title">Hip Hop</h5>
                  <p className="card-text">Hip hop dance is a high-energy and expressive dance style that incorporates elements of acrobatics, breakdancing, and street styles.</p>
                  <a href="#" className="btn btn-primary btn_2">View Course</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: '18rem'}}>
                  <img src="https://wallpapers.com/images/hd/dancing-pictures-jis4fnqfm49unfeu.jpg" className="card-img-top" alt="Salsa" />
                  <div className="card-body">
                    <h5 className="card-title">Salsa</h5>
                    <p className="card-text">Salsa dance is a lively and rhythmic partner dance with Cuban roots, known for its fast footwork and spicy hip movements.</p>
                    <a href="#" className="btn btn-primary btn_2">View Course</a>
                  </div>
                </div>
            </div>
          </div>
        </div>

          
          
          
        </div>
      </div>
    </>
  );
}
export default Freebook;
