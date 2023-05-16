import React, { useState } from 'react';
import MessageBox from "@/js/components/MessageBox";

function ChatComponent(props) {
	const [chatMessages, setChatMessages] = useState([]);

	const filterChatHistory = chatHistory => {
		let filteredChatHistory = [];
		for (let i = 0; i < chatHistory.length; i++) {
			const currMessage = chatHistory[i];
			const nextMessage = chatHistory[i + 1];

			if (i === chatHistory.length - 1 || (currMessage.type !== 'error' && nextMessage?.type !== 'error' && currMessage.role !== nextMessage?.role)) {
				filteredChatHistory.push(currMessage);
			}
		}

		return filteredChatHistory;
	}

	const buildResponseMessageObject = response => {
		let responseMessageObject;

		responseMessageObject = response.data.message;

		return responseMessageObject;
	}

	const handleKeyDown = async (e) => {
		if (e.key === 'Enter') {
			if (!e.target.value) {
				return;
			}

			const currentMessage = e.target.value;
			e.target.value = '';
			e.target.disabled = true;

			const currentMessageObject = {
				role: 'user',
				content: currentMessage,
			}

			setChatMessages(prevChatMessages => [...prevChatMessages, currentMessageObject]);
			const currentChatHistory = [...chatMessages, currentMessageObject];
			const filteredChatHistory = filterChatHistory(currentChatHistory);

			try {
				let response = await fetch('/api/answer', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						messages: filteredChatHistory,
						type: 'simple_assistant',
					}),
					signal: AbortSignal.timeout(20000),
				});
				response = await response.json();

				e.target.disabled = false;
				e.target.focus();
				console.log(response);

				const responseMessageObject = buildResponseMessageObject(response);
				setChatMessages(prevChatMessages => [...prevChatMessages, responseMessageObject]);
			}
			catch (error) {
				console.log(error);
			}
		}
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', backgroundColor: '#ffffff', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
			<div style={{ padding: '16px', fontSize: '24px', fontWeight: 600, color: '#2e2e2e', borderBottom: '1px solid #e5e5e5' }}>
				<h1 style={{ margin: "1rem", fontSize: "2.5rem", fontWeight: "bold", color: "#2d3748" }}>Get randomly generated recipes!</h1>
			</div>
			<div style={{ height: '100%', overflow: 'auto' }}>
				<MessageBox chatMessages={chatMessages} />
			</div>
			<div style={{ display: 'flex', borderTop: '1px solid #e5e5e5', padding: '16px' }}>
				<input style={{ flexGrow: 1, marginRight: '16px', padding: '12px', fontSize: '16px', color: '#2e2e2e', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', outline: 'none' }}
					id="chat-input"
					type="text"
					placeholder="Type something..."
					onKeyDown={handleKeyDown}
				/>
			</div>
		</div>
	);
}

export default ChatComponent;