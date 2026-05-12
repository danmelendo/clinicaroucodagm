const whatsappPhone = "34604899279";
const whatsappUrl = `https://wa.me/${whatsappPhone}`;

const ChatWidget = () => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-[120] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="sr-only">WhatsApp</span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7 fill-current"
      >
        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.48 0 .15 5.33.15 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.31-1.7a11.85 11.85 0 0 0 5.7 1.45h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.41-8.35ZM12.02 21.7a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.75 1.01 1-3.66-.23-.38a9.78 9.78 0 0 1-1.5-5.19c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.03 6.96 2.89a9.77 9.77 0 0 1 2.88 6.95c0 5.43-4.41 9.79-9.83 9.79Zm5.72-7.81c-.31-.16-1.83-.9-2.11-1s-.48-.16-.69.16-.79 1-.97 1.2-.36.23-.67.08a8.06 8.06 0 0 1-2.38-1.46 8.95 8.95 0 0 1-1.67-2.08c-.17-.3 0-.45.13-.6.13-.13.3-.34.45-.51.14-.17.19-.3.29-.5.1-.2.05-.38-.03-.54-.08-.16-.69-1.66-.94-2.28-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.53.07-.81.38-.28.3-1.08 1.06-1.08 2.58s1.11 2.99 1.26 3.2c.16.21 2.16 3.3 5.22 4.62.73.31 1.3.49 1.75.63.74.24 1.42.21 1.95.13.6-.09 1.83-.75 2.08-1.47.26-.72.26-1.34.18-1.47-.08-.12-.28-.2-.59-.36Z" />
      </svg>
    </a>
  );
};

export default ChatWidget;
