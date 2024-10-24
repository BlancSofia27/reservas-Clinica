import { useState} from 'react';
import SelectServicio from '../components/selectServicio'; 
import SelectCalendar from '../components/Calendar'; 
import SelectHorario from '../components/selectHorario';
import Hero from '../components/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import {sendReservationEmail} from "../components/sendReservationEmail"
import Swal from "sweetalert2"
const Reservar = () => {
  const [servicio, setServicio] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);
  const [step, setStep] = useState(1);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('')

    // Definir la animación para entrada y salida
    const animationVariants = {
      hidden: { opacity: 0, x: 20 }, // Posición de inicio al entrar
      visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } }, // Posición final al entrar
      exit: { opacity: 0, x: -20, transition: { duration: 0.5 } }, // Animación al salir
    };
  



  const handleServicioChange = (servicio) => {
    
    setServicio(servicio);
    setFechaSeleccionada(null); // Resetear la fecha al cambiar de servicio
    setHorarioSeleccionado(null); // Resetear horario
    setTimeout(() => {
      setStep(2); // Avanzar al calendario
    }, 1000);
  };

  const handleFechaChange = (fecha) => {
    setFechaSeleccionada(fecha);
    setHorarioSeleccionado(null); // Resetear horario al cambiar de fecha
    setTimeout(() => {
      setStep(3); // Avanzar al horario
    }, 1000);
  };

  const handleHorarioChange = (horario) => {
    setHorarioSeleccionado(horario);
    setTimeout(() => {
      setStep(4); // Avanzar a los datos personales
    }, 1000);
  };

  const handleVolverServicio = () => {
    setStep(1); // Volver a seleccionar servicio
  };

  const handleVolverFecha = () => {
    setStep(2); // Volver a seleccionar fecha
  };

  const handleVolverHorario = () => {
    setStep(3); // Volver a seleccionar horario
  };

  const handleFormSubmit = async () => {
    if (
      !nombre ||
      !email ||
      !emailConfirm ||
      !fechaSeleccionada ||
      !horarioSeleccionado ||
      !servicio 
    ) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Completa todos los campos para realizar la reserva",
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    // Validar que los correos electrónicos coincidan
    if (email !== emailConfirm) {
      alert(
        "Los correos electrónicos no coinciden. Por favor, verifica e intenta nuevamente."
      )
      return
    }

  
    const dataToSend = {
      nombre,
      servicio,
      fechaSeleccionada,
      horarioSeleccionado,
      email,
    }
    try {
      await sendReservationEmail(dataToSend)
      console.log(dataToSend)

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Reserva Realizada",
        showConfirmButton: false,
        timer: 1500,
      })
      resetForm()

      //Redireccionar después de 3 segundos
      setTimeout(() => {
        window.location.href = "/confirmacion"
      }, 3000)
    } catch (error) {
      console.error("Error al enviar la reserva:", error)
      alert("Hubo un problema al enviar la reserva")
    }
  }

  const resetForm = () => {
    setFechaSeleccionada(null)
    setServicio(null)
    setHorarioSeleccionado(null)
    setNombre("")
    setEmail("")
    setEmailConfirm("")
  }



  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center">
        <AnimatePresence mose="wait">
        {step === 1 && (
          <motion.div
          key="step1"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <SelectServicio onServicioChange={handleServicioChange} />
        </motion.div>
        )}
        {step === 2 && (
          <motion.div
          key='step2'
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit">
          
            <SelectCalendar onFechaChange={handleFechaChange} />
            <button
              onClick={handleVolverServicio} // Usar la función de volver aquí
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              >
              Volver
            </button>
              </motion.div>
        )}
        {step === 3 && (
           <motion.div
           key='step3'
           variants={animationVariants}
           initial="hidden"
           animate="visible"
           exit="exit">
            <SelectHorario 
              onHorarioChange={handleHorarioChange} 
              servicioSeleccionado={servicio} // Asegúrate de pasar el servicio aquí
            />
            <button
              onClick={handleVolverFecha} // Usar la función de volver aquí
              className="m-4 p-2 bg-blue-500 text-white rounded"
            >
              Volver
            </button>
          </motion.div>
        )}
         {step === 4 && (
           <motion.div
           key='step4'
           variants={animationVariants}
           initial="hidden"
           animate="visible"
           exit="exit">
            <div className="mt-4 text-black font-semibold">
              
              <h3>Resumen:</h3>
              <p>Servicio: {servicio}</p>
              <p>Fecha: {fechaSeleccionada}</p>
              <p>Horario: {horarioSeleccionado}</p>
            </div>
            <form onSubmit={handleFormSubmit} className="mt-4 text-black">
              <div className="mb-4">
                <label className="">Nombre:</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 p-2 bg-blue-500 text-white rounded"
              >
                Confirmar Reserva
              </button>
              <button
                onClick={handleVolverHorario} // Opción para volver al paso anterior
                className="mt-4 p-2 bg-gray-500 text-white rounded"
              >
                Volver
              </button>
            </form>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Reservar;
