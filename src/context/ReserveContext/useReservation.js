import { useContext } from "react";
import { ReservationContext } from "./ReservationContext";

export const useReservation = () => useContext(ReservationContext);