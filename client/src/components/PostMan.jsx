import React, { useState } from "react";

export default function PostmanInterface() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    try {
      const res = await fetch(url, { method });
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Collections</h2>
        <ul className="space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">My APIs</li>
          <li className="hover:bg-gray-700 p-2 rounded">Environment</li>
        </ul>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Top Bar */}
        <div className="flex items-center gap-2 bg-white p-4 shadow">
          <select
            className="p-2 border rounded"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>

        {/* Request Tabs */}
        <div className="bg-white shadow p-4 flex gap-4 border-b">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
            Params
          </button>
          <button className="text-gray-600">Headers</button>
          <button className="text-gray-600">Body</button>
        </div>

        {/* Response Section */}
        <div className="flex-1 bg-white m-4 p-4 rounded shadow overflow-auto">
          <h3 className="text-lg font-semibold mb-2">Response</h3>
          <pre className="bg-gray-100 p-2 rounded text-sm whitespace-pre-wrap">
            {response}
          </pre>
        </div>
      </div>
    </div>
  );
}
