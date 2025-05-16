
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, IndianRupee } from 'lucide-react';
import { useCart, MenuItem } from '@/contexts/CartContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface FoodCardProps {
  item: MenuItem;
  showAddToCart?: boolean;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, showAddToCart = true }) => {
  const { addToCart } = useCart();

  return (
    <Card className="glass card-hover overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <div className="flex items-center font-bold text-primary">
            <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
            <span>{item.price}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
      </CardContent>
      {showAddToCart && (
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={() => addToCart(item)}
            className="w-full"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FoodCard;
