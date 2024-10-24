import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Asegúrate de importar los estilos

const SelectCalendar = ({ onFechaChange }) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    const dateFormated = formatearFecha(date)
    setStartDate(date);
    onFechaChange(dateFormated); // Enviar la fecha seleccionada al componente padre
  };

  const formatearFecha = (date) => {
    const fecha = new Date(date)
    const opciones = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return fecha.toLocaleDateString("es-ES", opciones)
  }

  return (
    <div className="flex flex-col items-center mt-4">
      <h3 className="text-white mb-4">Selecciona una Fecha</h3>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        inline // Muestra el calendario de forma inline
        className="border p-2 rounded bg-white text-black"
      />
    </div>
  );
};

export default SelectCalendar;
