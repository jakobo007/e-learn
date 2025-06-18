import React, { useState } from 'react';

const CourseBookingForm = ({ courseName, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      
      formData.append("access_key", "d40557af-11a2-452b-9dfc-eb6d5f8d7886");
      formData.append("subject", `Course Booking: ${courseName}`); // Add subject for clarity
  
      try {
          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              body: formData
          });
  
          const data = await response.json();
  
          if (data.success) {
              setResult("Submitted Successfully");
              event.target.reset(); // Clear form fields
              // Optionally close the form after a delay or on user action
              // setTimeout(onClose, 2000);
          } else {
              console.error("Error", data);
              setResult(data.message || "Something went wrong!");
          }
      } catch (error) {
          console.error("Network or submission error:", error);
          setResult("Failed to send booking. Please try again.");
      }
    };
  
    
    const handleOverlayClick = (e) => {
      
      if (e.target.classList.contains('fixed')) { 
        onClose();
      }
    };
  
  
    return (
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 z-50"
        onClick={handleOverlayClick} 
      >
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book Your Course</h2>
          <p className="text-gray-700 text-center mb-6">Course: <span className="font-semibold">{courseName}</span></p>
  
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Close form"
          >
            &times;
          </button>
  
          {result === "Submitted Successfully" ? (
            <div className="text-center py-8">
              <p className="text-green-600 text-xl font-semibold mb-4">Booking request sent successfully!</p>
              <p className="text-gray-700">We will get back to you shortly.</p>
              <button
                onClick={onClose}
                className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Added name attribute for form data
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
  
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" // Added name attribute for form data
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
  
              <div>
                <label htmlFor="query" className="block text-gray-700 font-medium mb-1">
                  Your Queries (Optional)
                </label>
                <textarea
                  id="query"
                  name="message" // Using 'message' for consistency with your Contact form
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                disabled={result === "Sending...."} // Disable button while sending
              >
                {result === "Sending...." ? "Sending..." : "Submit Booking"}
              </button>
              <span className='block text-center mt-2 text-sm text-gray-600'>{result && result !== "Sending...." ? result : ''}</span>
            </form>
          )}
        </div>
      </div>
    );
  }

export default CourseBookingForm;