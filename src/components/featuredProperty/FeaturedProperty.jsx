import styled from "@emotion/styled"
import { useFetch } from "../../hooks/useFetch"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const FpItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`
const FpImg = styled.img`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`
const FpName = styled.div`
  color: #333;
  font-weight: bold;
`
const FpCity = styled.div`
  font-weight: 300;
`
const FpPrice = styled.div`
  font-weight: 500;
`
const FpRating = styled.div`
  button{
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
  }
`
const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <Wrapper>
      { loading 
        ?  "Loading"
        : <>
          { data.map( hotel => (
            <FpItem key={ hotel.id }>
              <FpImg
                src= { hotel.photos[0] }
                alt=""
              />
              <FpName>{ hotel.name }</FpName>
              <FpCity>{ hotel.city }</FpCity>
              <FpPrice>Starting from $ { hotel.cheapesPrice }</FpPrice>
              {
                hotel.rating  &&
                <FpRating>
                  <button>{ hotel.rating }</button>
                  <span>Excellent</span>
                </FpRating>
              }
            </FpItem>
          ))}
        </>
      }
    </Wrapper>
  );
};

export default FeaturedProperties;