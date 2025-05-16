
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface Order {
  id: number;
  items: any[];
  total: number;
  customer: {
    name: string;
    email: string;
    address: string;
  };
  date: string;
}

const OrderConfirmationPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  
  useEffect(() => {
    if (!orderId) {
      navigate('/');
      return;
    }
    
    // Get order from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const foundOrder = orders.find((o: Order) => o.id.toString() === orderId);
    
    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      navigate('/');
    }
  }, [orderId, navigate]);
  
  if (!order) {
    return null;
  }
  
  const formattedDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="glass p-8 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your order. Your food is being prepared.
        </p>
        
        <div className="bg-primary/5 p-4 rounded-lg mb-6">
          <div className="font-semibold mb-1">Order Number</div>
          <div className="text-2xl font-bold">{order.id}</div>
        </div>
        
        <div className="text-left mb-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-1">Order Details</h3>
            <p className="text-sm text-muted-foreground">Placed on {formattedDate}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Delivery Information</h3>
            <p className="text-muted-foreground">{order.customer.name}</p>
            <p className="text-muted-foreground">{order.customer.email}</p>
            <p className="text-muted-foreground">{order.customer.address}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Order Summary</h3>
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span>
                  {item.name} <span className="text-muted-foreground">x{item.quantity}</span>
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-2 pt-2 border-t">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button>
              Back to Home
            </Button>
          </Link>
          <Link to="/menu">
            <Button variant="outline">
              Order Again
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
