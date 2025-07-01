import React, { useState } from 'react';

export const NameInput = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const sendToAPI = async () => {
    if (!name.trim()) {
      setError('Please enter a name first');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      
      const apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Hello from ${name}`,
          body: `This is a test message from ${name}`,
          userId: Math.floor(Math.random() * 10) + 1,
          name: name
        }),
      });

      if (!apiResponse.ok) {
        throw new Error(`HTTP Error: ${apiResponse.status} ${apiResponse.statusText}`);
      }

      const data = await apiResponse.json();
      
     
      const formattedResponse = {
        id: data.id,
        message: `Hello ${name}! Your post was created successfully.`,
        title: data.title,
        body: data.body,
        userId: data.userId,
        timestamp: new Date().toISOString(),
        status: 'success'
      };

      setResponse(formattedResponse);
    } catch (err) {
      console.error('API Error:', err);
      setError(`API Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">API Integration Demo</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="flex-1 p-3 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          onClick={sendToAPI}
          disabled={loading || !name.trim()}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            loading || !name.trim()
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          {loading ? 'Sending...' : 'Send to API'}
        </button>
      </div>

      {name && !response && !error && (
        <p className="mb-3 text-lg">
          Hello, <span className="font-bold text-blue-600">{name}</span>! 👋
        </p>
      )}

      {/* Loading State */}
      {loading && (
        <div className="p-4 bg-blue-100 border border-blue-300 rounded-lg">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-3"></div>
            <span className="text-blue-800">Sending data to JSONPlaceholder API...</span>
          </div>
        </div>
      )}

      {/* Success Response */}
      {response && (
        <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">✅ API Response</h3>
          <div className="text-sm text-green-700 space-y-1">
            <p><strong>Post ID:</strong> {response.id}</p>
            <p><strong>Message:</strong> {response.message}</p>
            <p><strong>Title:</strong> {response.title}</p>
            <p><strong>Body:</strong> {response.body}</p>
            <p><strong>User ID:</strong> {response.userId}</p>
            <p><strong>Timestamp:</strong> {new Date(response.timestamp).toLocaleString()}</p>
            <p><strong>Status:</strong> {response.status}</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
          <h3 className="font-bold text-red-800 mb-2">❌ Error</h3>
          <p className="text-red-700">{error}</p>
          <button
            onClick={sendToAPI}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};