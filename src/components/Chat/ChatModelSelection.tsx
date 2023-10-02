import { ChangeEvent } from "react";
import { ChatModelSelectionProps, ModelType } from "@/types/ChatTypes";

const ChatModelSelection: React.FC<ChatModelSelectionProps> = ({
  selectedModel,
  setSelectedModel,
  isLoading,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedModel(event.target.value as ModelType);
  };

  return (
    <div className="mb-8">
      <h2 className="block text-xl leading-6 font-light mb-4">Model:</h2>
      <select
        id="model-selection"
        value={selectedModel}
        onChange={handleChange}
        className={`w-full text-highlight bg-background border border-dark rounded-lg shadow-sm p-3 focus:outline-none focus:ring-1 focus:ring-highlight  
        ${
          !isLoading
            ? "hover:border-highlight cursor-pointer"
            : "cursor-not-allowed"
        }
       `}
        disabled={isLoading}
      >
        <option value="gpt-3" className="text-light">
          The Pirate (gpt-3.5-turbo: single message)
        </option>
        <option value="gpt-4" className="text-light">
          The Riddler (gpt-4: conversational)
        </option>
      </select>
    </div>
  );
};

export default ChatModelSelection;
