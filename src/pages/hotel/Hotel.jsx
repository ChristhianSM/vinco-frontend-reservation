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
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

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
              <SliderImg src={photos[slideNumber].src} alt="" />
            </SliderWrapper>
            <Arrow
              icon={faCircleArrowRight}
              onClick={() => handleMove("r")}
            />
          </Slider>
        )}
        <HotelWrapper>
          <ButtonReserve>Reserve Now!</ButtonReserve>
          <HotelTitle>Tower Street Apartments</HotelTitle>
          <HotelAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </HotelAddress>
          <HotelDistance>
            Excellent location – 500m from center
          </HotelDistance>
          <HotelPriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i) => (
              <HotelImgWrapper key={i}>
                <HotelImg
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                />
              </HotelImgWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsTexts>
              <HotelTitle>Stay in the heart of City</HotelTitle>
              <HotelDesc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </HotelDesc>
            </HotelDetailsTexts>
            <HotelDetailsPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper>
        <MailList />
        <Footer />
      </HotelContainer>
    </div>
  );
};

