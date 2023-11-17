import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user_credentials = { username, password };
    axios
      .post("/api/v1/registrations", user_credentials)
      .then((response) => response.data)
      .then((data) => toast.success(data.message))
      .catch((err) => toast.error(err.message));
    setUsername("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-24 max-w-sm rounded-md border p-10"
    >
      <h1 className="mb-10 text-center text-2xl tracking-wide text-gray-600">
        Registration
      </h1>
      <input
        type="text"
        placeholder="username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 w-full rounded-md border px-4 py-2  text-gray-600 outline-none placeholder:text-base placeholder:tracking-wide placeholder:text-gray-400"
      />
      <input
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4 w-full rounded-md border px-4 py-2  text-gray-600 outline-none placeholder:text-base placeholder:tracking-wide placeholder:text-gray-400"
      />
      <button className="w-full rounded-md bg-blue-500 px-4 py-2 tracking-wide text-blue-50 transition-all hover:bg-blue-600">
        Register
      </button>
    </form>
  );
}
