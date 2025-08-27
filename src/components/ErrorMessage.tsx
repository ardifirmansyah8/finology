interface Props {
  error: string;
  onRetry: () => void;
}

const ErrorMessage = ({ error, onRetry }: Props) => (
  <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
      <div className="text-red-500 text-center mb-4">
        <X className="h-12 w-12 mx-auto mb-2" />
        <h2 className="text-xl font-semibold">Error Loading Users</h2>
      </div>
      <p className="text-gray-600 text-center mb-4">{error}</p>
      <button
        onClick={onRetry}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        type="button"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default ErrorMessage;
