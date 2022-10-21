import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useSearch } from "../../context/SearchContext/useSearch";
import { getDatesInRange } from "../../utils/helpers";

import * as Styled from './styles';

export const Reserve = ({ setOpenModal, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/rooms/${hotelId}`);
  const { dates } =  useSearch();

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavaibleDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpenModal(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {
          loading ? "Loading" : 
          <>
            <Styled.Close
              icon={faCircleXmark}
              onClick={() => setOpenModal(false)}
            />
            <span>Select your rooms:</span>
            {data.map((item) => (
              <Styled.Item key={item._id}>
                <Styled.Info>
                  <Styled.Title>{item.title}</Styled.Title>
                  <Styled.Description>{item.desc}</Styled.Description>
                  <Styled.Max>
                    Max people: <b>{item.maxPeople}</b>
                  </Styled.Max>
                  <Styled.Price>{item.price}</Styled.Price>
                </Styled.Info>
                <Styled.SelectRooms>
                  {item.roomNumbers.map((roomNumber) => (
                    <Styled.Room>
                      <label>{roomNumber.number}</label>
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelect}
                        disabled={!isAvailable(roomNumber)}
                      />
                    </Styled.Room>
                  ))}
                </Styled.SelectRooms>
              </Styled.Item>
            ))}
            <Styled.Button onClick={handleClick}>
              Reserve Now!
            </Styled.Button>
          </>
        }
      </Styled.Container>
    </Styled.Wrapper>
  );
};