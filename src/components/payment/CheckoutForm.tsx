import { currentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [transitionId, setTransitionId] = useState("");
  const user = useAppSelector(currentUser);

  if (!location?.state) {
    return navigate(-1);
  }

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!stripe || !elements) {
      return setLoading(false);
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return setLoading(false);
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setLoading(false);
      toast({
        title: confirmError.message,
      });
    } else {
      setTransitionId(paymentIntent.id);
      if (paymentIntent.status === "succeeded") {
        console.log({ paymentIntent });
      }
    }
  };
  return (
    <Container className="my-8 md:my-16">
      <div className="max-w-[30rem] mx-auto bg-muted dark:bg-white/90 border-2 border-theme p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col justify-end">
          <PaymentElement />
          <Button variant="outline" className="mt-6">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CheckoutForm;
