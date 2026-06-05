import { useState } from "react";
import axios from "axios";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    allergies: "",
    medications: "",
    diseases: "",
    emergencyContact: ""
  });

  const [qrCode, setQrCode] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateQR = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/profile/generate",
      formData
    );

    setQrCode(res.data.qrCode);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Emergency Medical Card</h1>

      <input
  name="name"
  placeholder="Full Name"
  onChange={handleChange}
/>

<br /><br />

<input
  type="number"
  name="age"
  placeholder="Age"
  onChange={handleChange}
/>

<br /><br />

<input
  name="bloodGroup"
  placeholder="Blood Group"
  onChange={handleChange}
/>

<br /><br />

<input
  name="emergencyContact"
  placeholder="Emergency Contact Number"
  onChange={handleChange}
/>

<br /><br />

<input
  name="allergies"
  placeholder="Allergies"
  onChange={handleChange}
/>

<br /><br />

<input
  name="medications"
  placeholder="Current Medications"
  onChange={handleChange}
/>

<br /><br />

<input
  name="diseases"
  placeholder="Medical Conditions"
  onChange={handleChange}
/>

<br /><br />

<input
  name="insuranceInfo"
  placeholder="Insurance Information (Optional)"
  onChange={handleChange}
/>

<br /><br />

      <button onClick={generateQR}>
        Generate QR
      </button>

      <br /><br />

      {qrCode && (
        <img
          src={qrCode}
          alt="QR Code"
          width={300}
        />
      )}
    </div>
  );
}

export default Home;