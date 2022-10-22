import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  width: 1024px;
  font-size: 12px;
`
const Lists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`
const List = styled.div`
  list-style: none;
  padding: 0;
`
const ListItem = styled.div`
  margin-bottom: 10px;
  color: #003580;
  cursor: pointer;
`

const Footer = () => {
  return (
    <Wrapper>
      <Lists>
        <List>
          <ListItem>Paises</ListItem>
          <ListItem>Regiones</ListItem>
          <ListItem>Ciudades</ListItem>
          <ListItem>Distritos</ListItem>
          <ListItem>Aeropuertos</ListItem>
          <ListItem>Hoteles</ListItem>
        </List>
        <List>
          <ListItem>Casas </ListItem>
          <ListItem>Departamentos </ListItem>
          <ListItem>Centros Turisticos </ListItem>
          <ListItem>Villas</ListItem>
          <ListItem>Hostales</ListItem>
          <ListItem>Casas de huéspedes</ListItem>
        </List>
        <List>
          <ListItem>Lugares únicos para quedarse </ListItem>
          <ListItem>Reseñas</ListItem>
          <ListItem>Desempaquetado: artículos de viaje </ListItem>
          <ListItem>Comunidades de viajes </ListItem>
          <ListItem>Ofertas de temporada y vacaciones</ListItem>
        </List>
        <List>
          <ListItem>Alquiler de coches </ListItem>
          <ListItem>Buscador de Vuelos</ListItem>
          <ListItem>Reservacion de restaurantes </ListItem>
          <ListItem>Agente de viajes </ListItem>
        </List>
        <List>
          <ListItem>Servicio de atención al cliente</ListItem>
          <ListItem>Ayuda para socios</ListItem>
          <ListItem>Carreras</ListItem>
          <ListItem>Sustentabilidad</ListItem>
          <ListItem>Centro de Prensa</ListItem>
          <ListItem>Centro de recursos de seguridad</ListItem>
          <ListItem>Relaciones con inversionistas</ListItem>
          <ListItem>Terminos y condiciones</ListItem>
        </List>
      </Lists>
      <div className="fText">Copyright © 2022 Christhian Silupù Moscol.</div>
    </Wrapper>
  );
};

export default Footer;