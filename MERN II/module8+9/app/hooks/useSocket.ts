/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from 'react';

// Real life mein yahan socket.io-client use hota hai
// Lekin hum PDF ki requirement ke mutabiq "Mock" events create karenge
export const useSocket = () => {
  const [liveOrders, setLiveOrders] = useState<any[]>([]);

  useEffect(() => {
    // Mocking a new order every 10 seconds for testing
    const interval = setInterval(() => {
      const newOrder = {
        id: Math.floor(Math.random() * 10000),
        user: "Guest Customer",
        amount: (Math.random() * 500).toFixed(2),
        time: new Date().toLocaleTimeString(),
      };
      
      setLiveOrders((prev) => [newOrder, ...prev].slice(0, 5)); // Sirf latest 5 orders rakhein
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return liveOrders;
};