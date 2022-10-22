import styled from "@emotion/styled";
import { useFetch } from "../../hooks/useFetch";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`
const FeaturedItem = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex:1;
`
const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`
export const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Piura,Lima,Iquitos")
  return (
    <Wrapper>
      {
        loading 
        ? " Loading please wait"
        : <>
            <FeaturedItem>
            <FeaturedImg
              src="https://e.rpp-noticias.io/xlarge/2021/08/15/345734_1132064.jpg"
              alt="Imagen Piura"
            />
            <FeaturedTitles>
              <h1> Piura </h1>
              <h2> { data[0] } Propiedades </h2>
            </FeaturedTitles>
          </FeaturedItem>
          <FeaturedItem>
            <FeaturedImg
              src="https://www.latamairlines.com/content/dam/latamxp/sites/destinos/peru/hero/LIM.jpg"
              alt="Imagen Lima"
            />
            <FeaturedTitles>
              <h1> Lima </h1>
              <h2>{ data[1] } Propiedades</h2>
            </FeaturedTitles>
          </FeaturedItem>
          <FeaturedItem>
            <FeaturedImg
              src="https://www.peru.travel/Contenido/Atractivo/Imagen/pe/111/1.3/Principal/ciudad-de-iquitos.jpg"
              alt=""
            />
            <FeaturedTitles>
              <h1> Iquitos </h1>
              <h2>{ data[2] } Propiedades</h2>
            </FeaturedTitles>
          </FeaturedItem>
        </>
      }
      
    </Wrapper>
  );
};