import React, { useState, useRef, useEffect } from 'react';

const Dropdown_Menu = ({ 
  label = "Select an option",
  options = [], 
  onSelect = () => {}, 
  placeholder = "Select...",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };
  
  return (
    <div className={`relative w-64 ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <button
        type="button"
        className={`flex items-center justify-between w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          disabled 
            ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
            : 'bg-white text-gray-900 hover:bg-gray-50'
        }`}
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg 
          className={`w-5 h-5 ml-2 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
          role="listbox"
        >
          <ul className="py-1">
            {options.length > 0 ? (
              options.map((option) => (
                <li 
                  key={option.value} 
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    selectedOption && selectedOption.value === option.value 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-900'
                  }`}
                  onClick={() => handleSelect(option)}
                  role="option"
                  aria-selected={selectedOption && selectedOption.value === option.value}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500">No options available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown_Menu;