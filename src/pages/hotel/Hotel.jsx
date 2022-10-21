import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import styled from "@emotion/styled";
import { useFetch } from "../../hooks/useFetch";
import { useLocation, useParams } from "react-router-dom";
import { useSearch } from "../../context/SearchContext/useSearch";
import { dayDifference } from "../../utils/helpers";

export const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`
export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`
export const ButtonReserve = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`
export const HotelTitle = styled.div`
  font-size: 24px;
`
export const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const HotelDistance = styled.div`
  color: #0071c2;
  font-weight: 500;
`
export const HotelPriceHighlight = styled.div`
  color: #008009;
  font-weight: 500;
`
export const HotelImages  = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const HotelImgWrapper  = styled.div`
  width: 33%;;
`
export const HotelImg  = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`
export const HotelDetails  = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`
export const HotelDetailsTexts   = styled.div`
  flex: 3;
`
export const HotelDesc = styled.div`
  font-size: 14px;
  margin-top: 20px;
`
export const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  >h2 {
    font-size: 18px;
    color: #555;
  }
  >span {
    font-size: 14px;
  }
  >h3{
    font-weight: 300;
  }
  >button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`
export const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
`
export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`
export const Close = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: lightgray;
  cursor: pointer;
`
export const Arrow = styled(FontAwesomeIcon)`
  margin: 20px;
  font-size: 50px;
  color: lightgray;
  cursor: pointer;
`
export const Hotel = () => {
  const { dates, options } = useSearch();
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/hotels/${ id }`);

  // Obtenemos las fechas para poder hacer el calculo del precio 
  const days = dayDifference( dates[0].endDate, dates[0].startDate);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {
        loading ? "Loading"
        :
        <HotelContainer>
          {open && (
            <Slider>
              <Close
                icon={faCircleXmark}
                onClick={() => setOpen(false)}
              />
              <Arrow
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <SliderWrapper>
                <SliderImg src={data.photos[slideNumber]} alt="" />
              </SliderWrapper>
              <Arrow
                icon={faCircleArrowRight}
                onClick={() => handleMove("r")}
              />
            </Slider>
          )}
          <HotelWrapper>
            <ButtonReserve>Reserve Now!</ButtonReserve>
            <HotelTitle> { data.name } </HotelTitle>
            <HotelAddress>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{ data.address }</span>
            </HotelAddress>
            <HotelDistance>
              Excellent location – ${ data.distance }m from center
            </HotelDistance>
            <HotelPriceHighlight>
              Book a stay over ${ data.cheapesPrice } at this property and get a free airport taxi
            </HotelPriceHighlight>
            <HotelImages>
              {data.photos?.map((photo, i) => (
                <HotelImgWrapper key={i}>
                  <HotelImg
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                  />
                </HotelImgWrapper>
              ))}
            </HotelImages>
            <HotelDetails>
              <HotelDetailsTexts>
                <HotelTitle>{ data.title }</HotelTitle>
                <HotelDesc> { data.description } </HotelDesc>
              </HotelDetailsTexts>
              <HotelDetailsPrice>
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$ { days *  data.cheapesPrice * options.room }</b> ({days} nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </HotelDetailsPrice>
            </HotelDetails>
          </HotelWrapper>
          <MailList />
          <Footer />
        </HotelContainer>
      }
    </div>
  );
};

