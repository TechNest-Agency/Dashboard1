
import { CheckoutSteps } from "../../../../components/CheckoutSteps";
import { OfferBanner } from "../../../../components/OfferBanner";
import { ShoppingCart } from "../../../../components/ShoppingCart";
import { CheckoutSummary } from "../../../../components/CheckoutSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <CheckoutSteps />
        <OfferBanner />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ShoppingCart />
          <CheckoutSummary />
        </div>
      </main>

     
    </div>
  );
};

export default Checkout;
