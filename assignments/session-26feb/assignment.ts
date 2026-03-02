// 1. Discriminated Union
type PaymentState =
  | { status: "pending" }
  | { status: "processing"; startedAt: Date }
  | { status: "completed"; transactionId: string; amount: number }
  | { status: "failed"; error: string };

// 2. Exhaustive Checking
function handlePayment(state: PaymentState) {
  switch (state.status) {
    case "pending":
      return "Pending";

    case "processing":
      return `Started at ${state.startedAt}`;

    case "completed":
      return `Success ${state.transactionId}`;

    case "failed":
      return `Failed: ${state.error}`;

    default:
      const exhaustiveCheck: never = state;
      return exhaustiveCheck;
  }
}

// 3. Generic API Response
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// 4. Type Guard
function isSuccess<T>(
  response: ApiResponse<T>
): response is { success: true; data: T } {
  return response.success;
}