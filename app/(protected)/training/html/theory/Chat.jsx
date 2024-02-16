"use client";
import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import "./chat.css";
import Loader from "@/app/components/Loader";
import { useSearchParams } from "next/navigation";

const Chat = () => {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic")?.split("-").join(" ");
  const { userId } = useAuth();
  const [text, setText] = useState(
    `imagine You are my codding mentor, please explaine me what is/are ${topic}, give me a some examples and, help me to tech those topics in html`
  );
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (query) => {
      const response = await generateChatResponse([...messages, query]);

      if (!response) {
        toast.error("Something went wrong...");
        return;
      }
      console.log(response.message);
      setMessages((prev) => [...prev, response.message]);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });

  useEffect(() => {
    const query = { role: "user", content: text };
    mutate(query);
    setText("");
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  console.log({ isPending });

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          {messages.map(({ role, content }, index) => {
            const avatar = role == "user" ? "👤" : "🤖";
            const bcg = role === "user" ? "" : "bg-light";
            return (
              <div key={index} className={`${bcg} chat-message `}>
                <span className="mr-4">{avatar}</span>
                <p className="">{content}</p>
              </div>
            );
          })}
          {isPending ? <Loader /> : null}

          <div className="input-group mb-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Do you have any wuestion, feel free to ask me"
            />
            <button
              onClick={() => handleSubmit()}
              disabled={isPending}
              className="input-group-text btn btn-success "
              id="basic-addon2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
