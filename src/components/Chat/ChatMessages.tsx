import { useRef, useEffect } from "react";
import { ChatMessagesProps } from "@/types/ChatTypes";

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  selectedModel,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const getChatDisplayName = (role: string) => {
    if (role === "user") return "You: ";
    return selectedModel === "gpt-3" ? "The Pirate: " : "The Riddler: ";
  };

  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, messagesEndRef]);

  return (
    <div className="mb-8">
      <h2 className="block text-xl leading-6 font-light mb-4">Messages:</h2>
      <div className="overflow-y-auto break-words border border-dark rounded-lg p-4 min-h-[20vh] max-h-[20vh]">
        {messages.map((message, index) => (
          <p key={`${message.role}-${index}`} className="pb-2">
            <span
              className={
                message.role === "user" ? "text-light" : "text-highlight"
              }
            >
              <span className="font-bold">
                {getChatDisplayName(message.role)}
              </span>
              {message.content}
            </span>
          </p>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;
