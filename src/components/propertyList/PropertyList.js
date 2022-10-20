import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`
const ListItem = styled.div`
  flex:1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`
const ListImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`
const ListTitles = styled.div`
  h2 {
    font-size: 18px;
    color: #444;
  }
  h3{
    font-size: 14px;
  font-weight: 300;
  }
`
const PropertyList = () => {
  return (
    <Wrapper>
      <ListItem>
        <ListImg
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt=""
        />
        <div className="pListTitles">
          <h2>Hotels</h2>
          <h3>233 hotels</h3>
        </div>
      </ListItem>
      <ListItem>
        <ListImg
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt=""
        />
        <ListTitles>
          <h2>Apartments</h2>
          <h3>2331 hotels</h3>
        </ListTitles>
      </ListItem>
      <ListItem>
        <ListImg
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
        />
        <ListTitles>
          <h2>Resorts</h2>
          <h3>2331 hotels</h3>
        </ListTitles>
      </ListItem>
      <ListItem>
        <ListImg
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
        />
        <ListTitles>
          <h2>Villas</h2>
          <h3>2331 hotels</h3>
        </ListTitles>
      </ListItem>
      <ListItem>
        <ListImg
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
        />
        <ListTitles>
          <h2>Cabins</h2>
          <h3>2331 hotels</h3>
        </ListTitles>
      </ListItem>
    </Wrapper>
  );
};

export default PropertyList;