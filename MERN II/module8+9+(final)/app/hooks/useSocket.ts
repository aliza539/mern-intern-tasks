/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from 'react';


interface Order {
  id: string;
  email: string;
  amount: string;
  time: string;
  status: string;
}

export const useSocket = () => {
  
  const [liveOrders, setLiveOrders] = useState<Order[]>([]);

  const fetchRealOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      if (!res.ok) throw new Error("Failed to fetch");
      
      const data: Order[] = await res.json();
      setOrdersSafely(data);
    } catch (err) {
      console.error("Polling error:", err);
    }
  };

  
  const setOrdersSafely = (data: any) => {
    if (Array.isArray(data)) {
      setLiveOrders(data);
    }
  }

  useEffect(() => {
    fetchRealOrders(); 
    
    
    const interval = setInterval(fetchRealOrders, 5000); 
    
    return () => clearInterval(interval);
  }, []);

  return liveOrders;
};