import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const SearchItem = ({ hotel }) => {
  const { photos, name, distance, address, description, rating, rooms, cheapesPrice  } = hotel;

  return (
    <Styled.Wrapper>
      <Styled.Img
        src= { photos[0] }
        alt="Photo Hotel"
      />
      <Styled.Description>
        <Styled.Title>{ name }</Styled.Title>
        <Styled.Distance>{ distance }m from center</Styled.Distance>
        <Styled.TaxiOp>Free airport taxi</Styled.TaxiOp>
        <Styled.Subtitle>
          Studio Apartment with Air conditioning
        </Styled.Subtitle>
        <Styled.Features>
          { description }
        </Styled.Features>
        <Styled.CancelOp>Free cancellation </Styled.CancelOp>
        <Styled.CancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </Styled.CancelOpSubtitle>
      </Styled.Description>
      <Styled.Details>
        {
          rating &&
          <Styled.Rating>
            <span>Excellent</span>
            <button>{ rating }</button>
          </Styled.Rating>
        }
        <Styled.DetailsTexts>
          <Styled.Price>$ {cheapesPrice}</Styled.Price>
          <Styled.TaxOp>Includes taxes and fees</Styled.TaxOp>
          <Link to={`/hotels/${ hotel._id }`}>
            <Styled.CheckButton>See availability</Styled.CheckButton>
          </Link>
        </Styled.DetailsTexts>
      </Styled.Details>
    </Styled.Wrapper>
  );
};