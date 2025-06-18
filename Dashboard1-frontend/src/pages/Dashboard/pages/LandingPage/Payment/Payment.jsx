
import { PaymentForm } from "../../../../../components/PaymentForm";
import { OrderSummary } from "../../../../../components/OrderSummary";

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <PaymentForm />
          <OrderSummary />
        </div>
      </main>

   
    </div>
  );
};

export default Payment;
