import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const SearchItem = ({ hotel }) => {
  const { photos, name, distance, description, rating, cheapesPrice  } = hotel;

  return (
    <Styled.Wrapper>
      <Styled.Img
        src= { photos[0] }
        alt="Photo Hotel"
      />
      <Styled.Description>
        <Styled.Title>{ name }</Styled.Title>
        <Styled.Distance>{ distance }m del Centro</Styled.Distance>
        <Styled.TaxiOp>Taxi gratuito al aeropuerto</Styled.TaxiOp>
        <Styled.Subtitle>
        Apartamento estudio con aire acondicionado
        </Styled.Subtitle>
        <Styled.Features>
          { description }
        </Styled.Features>
        <Styled.CancelOp> Cancelación gratis </Styled.CancelOp>
        <Styled.CancelOpSubtitle>
          Puede cancelar más tarde, ¡así que asegure este excelente precio hoy!
        </Styled.CancelOpSubtitle>
      </Styled.Description>
      <Styled.Details>
        {
          rating &&
          <Styled.Rating>
            <span>Excelente</span>
            <button>{ rating }</button>
          </Styled.Rating>
        }
        <Styled.DetailsTexts>
          <Styled.Price>$ {cheapesPrice}</Styled.Price>
          <Styled.TaxOp> Incluye impuestos y tasas</Styled.TaxOp>
          <Link to={`/hotels/${ hotel._id }`}>
            <Styled.CheckButton>Ver disponibilidad</Styled.CheckButton>
          </Link>
        </Styled.DetailsTexts>
      </Styled.Details>
    </Styled.Wrapper>
  );
};