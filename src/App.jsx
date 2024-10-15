import { useState, useCallback, useEffect } from 'react';
import './App.css';
import 
function App() {
  const [passwordLength, setPasswordLen] = useState(8); // Default password length is 8
  const [password, setPassword] = useState('');
  const [isNumber, setNumber] = useState(false);
  const [isCharactor, setCharactors] = useState(false);

  const selectPass = useRef(null);
  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (isNumber) str += '0123456789';
    if (isCharactor) str += '!@#$%^&*()-_=+{}[]:;<>,.?/"';

    for (let i = 0; i < passwordLength; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passwordLength, isNumber, isCharactor]);

  // Function to copy the password to the clipboard
  const copyToClipboard = useCallback(() => {
    if (password) {
      selectPass.currect?.select();
      navigator.clipboard.writeText(password);
  
    }
  },[password]);
  useEffect(() => {
    passGenerator();
  }, [passwordLength, isNumber, isCharactor]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

      <div className="mb-4 flex items-center w-full max-w-md">
        <input
          type="text"
          value={password}
          className="p-2 border border-gray-300 rounded-l-lg w-full text-center"
          placeholder="Generated password will appear here"
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Copy
        </button>
      </div>

      <div className="mb-4 flex items-center space-x-4">
        {/* Checkbox for Numbers */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isNumber}
            onChange={(e) => setNumber(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Include Numbers</span>
        </label>

        {/* Checkbox for Special Characters */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isCharactor}
            onChange={(e) => setCharactors(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Include Special Characters</span>
        </label>
      </div>

      {/* Password Length Slider */}
      <div className="mb-4 flex items-center space-x-4">
        <label className="flex items-center space-x-2">
          <span>Password Length</span>
          <input
            type="range"
            min="8"
            max="50"
            value={passwordLength}
            onChange={(e) => setPasswordLen(Number(e.target.value))}
            className="form-range"
          />
          <span>{passwordLength}</span> {/* Displays the current password length */}
        </label>
      </div>

      <button
        onClick={passGenerator}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
