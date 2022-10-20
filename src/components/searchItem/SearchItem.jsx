import * as Styled from './styles';

export const SearchItem = () => {
  return (
    <Styled.Wrapper>
      <Styled.Img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
      />
      <Styled.Description>
        <Styled.Title>Tower Street Apartments</Styled.Title>
        <Styled.Distance>500m from center</Styled.Distance>
        <Styled.TaxiOp>Free airport taxi</Styled.TaxiOp>
        <Styled.Subtitle>
          Studio Apartment with Air conditioning
        </Styled.Subtitle>
        <Styled.Features>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </Styled.Features>
        <Styled.CancelOp>Free cancellation </Styled.CancelOp>
        <Styled.CancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </Styled.CancelOpSubtitle>
      </Styled.Description>
      <Styled.Details>
        <Styled.Rating>
          <span>Excellent</span>
          <button>8.9</button>
        </Styled.Rating>
        <Styled.DetailsTexts>
          <Styled.Price>$112</Styled.Price>
          <Styled.TaxOp>Includes taxes and fees</Styled.TaxOp>
          <Styled.CheckButton>See availability</Styled.CheckButton>
        </Styled.DetailsTexts>
      </Styled.Details>
    </Styled.Wrapper>
  );
};