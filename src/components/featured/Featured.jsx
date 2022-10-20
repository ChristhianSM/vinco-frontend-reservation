import styled from "@emotion/styled";

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
  return (
    <Wrapper>
      <FeaturedItem>
        <FeaturedImg
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
        />
        <FeaturedTitles>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </FeaturedTitles>
      </FeaturedItem>
      
      <FeaturedItem>
        <FeaturedImg
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
        />
        <FeaturedTitles>
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </FeaturedTitles>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedImg
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
        />
        <FeaturedTitles>
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </FeaturedTitles>
      </FeaturedItem>
    </Wrapper>
  );
};