import { Icon } from "./icons";
import { site } from "../lib/site";

// Opens WhatsApp. Swap for Crisp, Tawk.to or Intercom when you want live chat.
export default function ChatButton() {
  return (
    <a href={`https://wa.me/${site.whatsapp}?text=Hi%20Maple%20Tech!`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 font-semibold text-white shadow-xl transition hover:brightness-110">
      <Icon n="chat" className="h-5 w-5" />Chat with us
    </a>
  );
}
