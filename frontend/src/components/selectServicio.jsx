import React, { useState } from 'react';

const services = [
  { id: 1, name: 'Cardiología', icon: 'https://img.icons8.com/ios-filled/50/000000/heart-health.png' },
  { id: 2, name: 'Cirugía vascular', icon: 'https://img.icons8.com/ios-filled/50/000000/surgery.png' },
  { id: 3, name: 'Endocrinología', icon: 'https://img.icons8.com/ios-filled/50/000000/hormones.png' },
  { id: 4, name: 'Fonoaudiología', icon: 'https://img.icons8.com/ios-filled/50/000000/voice.png' },
  { id: 5, name: 'Kinesiología', icon: 'https://img.icons8.com/ios-filled/50/000000/exercise.png' },
  { id: 6, name: 'Medicina general y de familia', icon: 'https://img.icons8.com/ios-filled/50/000000/doctor.png' },
  { id: 7, name: 'Neurología', icon: 'https://img.icons8.com/ios-filled/50/000000/brain.png' },
  { id: 8, name: 'Oftalmología', icon: 'https://img.icons8.com/ios-filled/50/000000/eye.png' },
  { id: 9, name: 'Pediatría', icon: 'https://img.icons8.com/ios-filled/50/000000/child.png' },
  { id: 10, name: 'Psicología / Ps. Infantil', icon: 'https://img.icons8.com/ios-filled/50/000000/mental-health.png' },
  { id: 11, name: 'Traumatología', icon: 'https://img.icons8.com/ios-filled/50/000000/orthopedic.png' },
  { id: 12, name: 'Cirugía general / endoscopía', icon: 'https://img.icons8.com/ios-filled/50/000000/surgical-instruments.png' },
  { id: 13, name: 'Clínica médica', icon: 'https://img.icons8.com/ios-filled/50/000000/stethoscope.png' },
  { id: 14, name: 'Flebología', icon: 'https://img.icons8.com/ios-filled/50/000000/vein.png' },
  { id: 15, name: 'Ginecología y Obstetricia', icon: 'https://img.icons8.com/ios-filled/50/000000/gynecology.png' },
  { id: 16, name: 'Mastología', icon: 'https://img.icons8.com/ios-filled/50/000000/mammogram.png' },
  { id: 17, name: 'Nefrología', icon: 'https://img.icons8.com/ios-filled/50/000000/kidney.png' },
  { id: 18, name: 'Nutrición', icon: 'https://img.icons8.com/ios-filled/50/000000/nutrition.png' },
  { id: 19, name: 'Otorrinolaringología', icon: 'https://img.icons8.com/ios-filled/50/000000/ear.png' },
  { id: 20, name: 'Podología', icon: 'https://img.icons8.com/ios-filled/50/000000/foot.png' },
  { id: 21, name: 'Pelquiatría', icon: 'https://img.icons8.com/ios-filled/50/000000/baby.png' },
];

const SelectServicio = ({ onServicioChange }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
    onServicioChange(serviceName); // Pasar el servicio seleccionado al componente padre
  };

  return (
    <div className="container mx-auto p-6 text-black">
      <h2 className="text-2xl font-bold mb-6">Selecciona un servicio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`border rounded-lg p-4 flex items-center space-x-4 cursor-pointer shadow-xl border-2 ${
              selectedService === service.name ? 'border-blue-500' : ''
            }`}
            onClick={() => handleServiceClick(service.name)}
          >
            <img src={service.icon} alt={service.name} className="w-10 h-10" />
            <span className="text-lg font-medium">{service.name}</span>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Servicio seleccionado:</h3>
          <p className="text-lg">{selectedService}</p>
        </div>
      )}
    </div>
  );
};

export default SelectServicio;
