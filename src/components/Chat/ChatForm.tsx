"use client";

import { useState } from "react";
import ContentCard from "@/components/ContentCard";
import ChatModelSelection from "@/components/Chat/ChatModelSelection";
import ChatMessages from "@/components/Chat/ChatMessages";
import ChatInput from "@/components/Chat/ChatInput";
import { ModelType } from "@/types/ChatTypes";
import { useChat } from "ai/react";

/**
 * ChatForm Component
 *
 * A form component that allows the user to select a model and send messages to
 * the model. The messages are displayed in a chat window.
 */
const ChatForm: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType>("gpt-3");
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: `/api/openai/chat/${selectedModel}`,
    });

  return (
    <ContentCard
      show={true}
      title="Matt GPT Chat Completions"
      content={
        <>
          <ChatModelSelection
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            isLoading={isLoading}
          />
          <ChatMessages messages={messages} selectedModel={selectedModel} />
          <ChatInput
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            isLoading={isLoading}
            selectedModel={selectedModel}
          />
        </>
      }
    />
  );
};

export default ChatForm;
