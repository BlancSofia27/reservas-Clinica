import { useState } from 'react';
import Calendario from '../components/calendar'; // Asumiendo que ya tienes este componente de calendario

const AdminReservasTable = () => {
  const [fecha, setFecha] = useState(new Date()); // Usamos la fecha actual como valor inicial
  const [search, setSearch] = useState(''); // Para la búsqueda por nombre
  const [servicio, setServicio] = useState(''); // Para filtrar por servicio

  // Función para generar servicios aleatorios
  const randomServicio = () => {
    const servicios = ['Corte', 'Barba', 'Color'];
    return servicios[Math.floor(Math.random() * servicios.length)];
  };

  // Horarios estáticos desde las 08:00 AM hasta las 20:30 PM
  const horarios = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '13:10', '16:00', '16:20', '17:00', '17:10', '18:00', '19:00',
    '19:15', '20:00', '20:30'
  ];

  // Datos hardcodeados de las reservas con horarios y servicios aleatorios
  const reservasHardcoded = [
    { id: 1, nombre: 'Juan Ramírez', servicio: randomServicio(), horario: horarios[0] },
    { id: 2, nombre: 'Carlos Ortiz', servicio: randomServicio(), horario: horarios[1] },
    { id: 3, nombre: 'Miguel Pérez', servicio: randomServicio(), horario: horarios[2] },
    { id: 4, nombre: 'Luis Martínez', servicio: randomServicio(), horario: horarios[3] },
    { id: 5, nombre: 'José Rodríguez', servicio: randomServicio(), horario: horarios[4] },
    { id: 6, nombre: 'David Fernández', servicio: randomServicio(), horario: horarios[5] },
    { id: 7, nombre: 'Santiago Sánchez', servicio: randomServicio(), horario: horarios[6] },
    { id: 8, nombre: 'Diego Olivero', servicio: randomServicio(), horario: horarios[7] },
    { id: 9, nombre: 'Pablo Torres', servicio: randomServicio(), horario: horarios[8] },
    { id: 10, nombre: 'Andrés Gómez', servicio: randomServicio(), horario: horarios[9] },
    { id: 11, nombre: 'Sebastián Domínguez', servicio: randomServicio(), horario: horarios[10] },
    { id: 12, nombre: 'Valentín López', servicio: randomServicio(), horario: horarios[11] },
    { id: 13, nombre: 'Daniel Suárez', servicio: randomServicio(), horario: horarios[12] },
  ];

  // Filtro por nombre y servicio
  const filteredReservas = reservasHardcoded
    .filter((reserva) => reserva.nombre.toLowerCase().includes(search.toLowerCase()))
    .filter((reserva) => servicio ? reserva.servicio.toLowerCase() === servicio.toLowerCase() : true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-800 text-white">
      <div className="w-full max-w-4xl p-4 shadow-lg rounded-lg bg-zinc-700">
        <h1 className="text-2xl font-bold mb-4 text-center">Panel De Turnos</h1>

        {/* Componente de calendario */}
        <Calendario onDateChange={setFecha} selectedDate={fecha} />

        {/* Barra de búsqueda por nombre */}
        <div className="m-2">
          <label htmlFor="search" className="block text-lg font-medium">Buscar por Nombre:</label>
          <input
            type="text"
            id="search"
            placeholder="Ingresa Un Nombre"
            className="border p-2 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filtro por servicio */}
        <div className="m-2">
          <label htmlFor="servicio" className="block text-lg font-medium">Filtrar por Servicio:</label>
          <select
            id="servicio"
            className="border p-2 w-full text-gray-800 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Corte">Corte</option>
            <option value="Barba">Barba</option>
            <option value="Color">Color</option>
          </select>
        </div>

        <h2 className="text-xl mb-2 text-center">Reservas para el {new Date(fecha).toLocaleDateString()}</h2>

        {filteredReservas.length > 0 ? (
          <table className="min-w-full shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-500">
              <tr>
                <th className="py-2 px-2 border-b">Nombre</th>
                <th className="py-2 px-2 border-b text-center">Servicio</th>
                <th className="py-2 px-1 border-b text-center">Horario</th>
                <th className="p-2 pb-3 border-b text-center font-extrabold text-4xl">+</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservas.map((reserva) => (
                <tr key={reserva.id} className="hover:bg-gray-600">
                  <td className="py-2 px-2 border-b h-20 w-10">{reserva.nombre}</td>
                  <td className="py-2 px-1 border-b text-center">{reserva.servicio}</td>
                  <td className="py-2 px-1 border-b text-center">{reserva.horario}</td>
                  <td className="text-center border-b">
                    <button className="font-bold px-2 py-1 rounded-lg border border-red-600 bg-red-500 text-white transition-transform transform hover:scale-105">
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No hay reservas para esta fecha.</p>
        )}
      </div>
    </div>
  );
};

export default AdminReservasTable;
