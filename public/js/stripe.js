import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51N3eJSKcVykOCkmdFDrxIbA1hISX4C7aA8YN8DXyVXtMdi64kpzRtdVzRvC0XO6xZ7bSWLX9jPIUFyinMnFfusZy00Teh6BOFW'
  );

  try {
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (e) {
    showAlert('error', e);
  }
};
