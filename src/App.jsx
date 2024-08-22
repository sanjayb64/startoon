
import React from 'react';
import ProfileCard from './component/ProfileCard';

function App() {
  const profileData = {
    name: "S. Meena",
    gender: "F",
    age: 23,
    patientId: "87 20200727153457",
    progress: 40, // Goal percentage
    phone: "8022334455",
    email: "meenarbinaschin2@gmail.com",
    affectedSide: "Bilateral",
    condition: "Ortho",
    speciality: "Osteoarthritis",
    medicalHistory: "Hypertension, DM Hypothyroidism",
  };

  return (
    <div className="bg-white min-h-screen">
      <ProfileCard {...profileData} />
    </div>
  );
}

export default App;