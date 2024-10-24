import { useState } from 'react';

const SelectHorario = ({ onHorarioChange, servicioSeleccionado }) => {
  const [selectedHorario, setSelectedHorario] = useState(null);

  // Definimos horarios para cada servicio
  const horariosPorServicio = {
    Cardiología: [
      '09:00', '10:15', '11:00', '13:00', '14:30', '15:45', '16:30', '17:15',
    ],
    'Cirugía vascular': [
      '10:00', '11:15', '12:00', '14:00', '15:30', '16:15', '17:00', '18:30',
    ],
    Endocrinología: [
      '09:30', '10:45', '11:30', '13:30', '14:45', '15:15', '16:00', '17:30',
    ],
    Fonoaudiología: [
      '08:00', '09:15', '10:00', '11:30', '12:15', '13:00', '14:30', '15:30',
    ],
    Kinesiología: [
      '09:00', '10:30', '11:30', '13:00', '14:00', '15:30', '16:30', '17:45',
    ],
    'Medicina general y de familia': [
      '09:00', '10:15', '11:00', '12:30', '13:15', '15:00', '16:00', '17:00',
    ],
    Neurología: [
      '10:00', '11:30', '12:30', '14:00', '15:15', '16:15', '17:30', '18:00',
    ],
    Oftalmología: [
      '08:30', '09:15', '10:00', '11:15', '12:00', '14:00', '15:30', '16:45',
    ],
    Pediatría: [
      '09:00', '10:15', '11:00', '12:30', '13:15', '14:30', '15:30', '16:00',
    ],
    'Psicología / Ps. Infantil': [
      '08:30', '09:15', '10:00', '11:30', '13:00', '14:00', '16:00', '17:00',
    ],
    Traumatología: [
      '09:30', '10:45', '11:30', '13:30', '15:00', '16:15', '17:00', '18:00',
    ],
    'Cirugía general / endoscopía': [
      '10:00', '11:15', '12:00', '13:30', '15:30', '16:15', '17:00', '18:30',
    ],
    'Clínica médica': [
      '09:00', '10:15', '11:00', '12:30', '14:00', '15:00', '16:00', '17:30',
    ],
    Flebología: [
      '09:30', '10:45', '11:30', '12:00', '14:15', '15:00', '16:00', '17:30',
    ],
    'Ginecología y Obstetricia': [
      '08:00', '09:15', '10:30', '11:45', '13:00', '14:00', '15:15', '16:30',
    ],
    Mastología: [
      '09:00', '10:15', '11:00', '12:30', '14:30', '15:45', '16:30', '17:30',
    ],
    Nefrología: [
      '08:30', '09:15', '10:30', '11:00', '13:30', '15:00', '16:00', '17:00',
    ],
    Nutrición: [
      '09:00', '10:15', '11:30', '13:00', '14:15', '15:00', '16:30', '17:30',
    ],
    'Otorrinolaringología': [
      '10:00', '11:15', '12:00', '13:30', '15:30', '16:15', '17:00', '18:00',
    ],
    Podología: [
      '09:00', '10:15', '11:30', '13:00', '14:30', '15:45', '16:30', '17:30',
    ],
    Psiquiatría: [
      '09:30', '10:45', '12:00', '13:30', '15:00', '16:00', '17:00', '18:00',
    ],
  };
  

  // Obtenemos los horarios del servicio seleccionado
  const horarios = horariosPorServicio[servicioSeleccionado] || [];
  const handleHorarioClick = (hora) => {
    setSelectedHorario(hora);
    onHorarioChange(hora); // Enviar el valor seleccionado al componente padre
  };

  return (
    <div className="flex flex-col items-center mt-4 text-black">
      <h1>{servicioSeleccionado}</h1>
      <h3 className="mb-4">Horarios Disponibles</h3>
      <div className="grid grid-cols-4 gap-4 justify-center p-3">
        {horarios.length > 0 ? (
          horarios.map((hora, index) => (
            <button
              key={index}
              onClick={() => handleHorarioClick(hora)}
              className={`p-4 font-semibold border rounded transition duration-300 ease-in-out ${
                selectedHorario === hora ? 'bg-green-500' : 'bg-zinc-200'
              } text-black`}
            >
              {hora}
            </button>
          ))
        ) : (
          <p className="text-white">No hay horarios disponibles</p>
        )}
      </div>
    </div>
  );
};

export default SelectHorario;
