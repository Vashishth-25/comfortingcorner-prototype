import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles, ShieldAlert, MoreVertical, Calendar, LifeBuoy } from 'lucide-react';
import { BUDDY_CHAT_PROMPTS, SIMULATED_BUDDY_RESPONSES } from '../data/mockData.js';
export const BuddyChatModal = ({ buddy, isOpen, onClose, onOpenLifeline, onSwitchToTherapist, }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
    const [sessionRequested, setSessionRequested] = useState(false);
    const [blockReported, setBlockReported] = useState(false);
    const messagesEndRef = useRef(null);
    // Initialize conversation when buddy changes or modal opens
    useEffect(() => {
        if (isOpen && buddy) {
            setMessages([
                {
                    id: 'init-1',
                    buddyId: buddy.id,
                    sender: 'buddy',
                    text: `Hi there! I'm ${buddy.name.split(' ')[0]}. Take all the time you need. How are you feeling right now, or what is on your mind?`,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                },
            ]);
            setSessionRequested(false);
            setBlockReported(false);
        }
    }, [isOpen, buddy]);
    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);
    if (!isOpen || !buddy)
        return null;
    const handleSendMessage = (textToSend) => {
        const text = textToSend || inputText.trim();
        if (!text)
            return;
        const userMsg = {
            id: `user-${Date.now()}`,
            buddyId: buddy.id,
            sender: 'user',
            text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, userMsg]);
        setInputText('');
        // Trigger realistic Buddy response
        setIsTyping(true);
        setTimeout(() => {
            let replyPool = SIMULATED_BUDDY_RESPONSES.default;
            const lower = text.toLowerCase();
            if (lower.includes('difficult') || lower.includes('hard') || lower.includes('bad')) {
                replyPool = SIMULATED_BUDDY_RESPONSES.difficult;
            }
            else if (lower.includes('overwhelm') || lower.includes('deadline') || lower.includes('stress')) {
                replyPool = SIMULATED_BUDDY_RESPONSES.overwhelmed;
            }
            else if (lower.includes('listen') || lower.includes('alone') || lower.includes('hear')) {
                replyPool = SIMULATED_BUDDY_RESPONSES.listen;
            }
            else if (lower.includes('sure') || lower.includes('explain') || lower.includes('confused')) {
                replyPool = SIMULATED_BUDDY_RESPONSES.unsure;
            }
            const randomReply = replyPool[Math.floor(Math.random() * replyPool.length)];
            const buddyReply = {
                id: `buddy-${Date.now()}`,
                buddyId: buddy.id,
                sender: 'buddy',
                text: randomReply,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev, buddyReply]);
            setIsTyping(false);
        }, 1400);
    };
    const handlePromptClick = (prompt) => {
        handleSendMessage(prompt);
    };
    const handleRequestSession = () => {
        setSessionRequested(true);
        setShowOptionsDropdown(false);
        const systemNotice = {
            id: `sys-${Date.now()}`,
            buddyId: buddy.id,
            sender: 'buddy',
            text: `I received your session request for ${buddy.nextAvailableSlot}. I'll hold that slot open for a dedicated 30-minute peer listening check-in!`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, systemNotice]);
    };
    const handleReportBlock = () => {
        setBlockReported(true);
        setShowOptionsDropdown(false);
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/40 backdrop-blur-sm", children: _jsxs("div", { className: "bg-[#FFFFFF] dark:bg-[#1D2320] w-full max-w-2xl h-[90vh] sm:h-[82vh] rounded-3xl shadow-2xl border border-[rgba(37,43,40,0.08)] dark:border-[rgba(234,236,229,0.08)] flex flex-col overflow-hidden text-[#252B28] dark:text-[#EAECE5]", children: [_jsxs("div", { className: "px-5 py-3.5 bg-[#F7F8F3] dark:bg-[#161B18] border-b border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] flex items-center justify-between gap-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: buddy.avatar, alt: buddy.name, referrerPolicy: "no-referrer", className: "w-10 h-10 rounded-full object-cover border border-[rgba(37,43,40,0.1)]" }), _jsx("span", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#FFFFFF] dark:border-[#161B18]" })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("h3", { className: "text-sm font-semibold text-[#252B28] dark:text-[#EAECE5]", children: buddy.name }), _jsx("span", { className: "text-[10px] bg-[#E7EEE8] dark:bg-[#262E2A] text-[#60756A] dark:text-[#758D81] px-2 py-0.2 rounded-full font-medium", children: "Buddy" })] }), _jsxs("p", { className: "text-[11px] text-[#77817B] dark:text-[#A4AEA7] truncate max-w-[200px] sm:max-w-none", children: [buddy.degree, " \u00B7 Active Listener (", buddy.ccPoints, " CC Points)"] })] })] }), _jsxs("div", { className: "flex items-center gap-2 relative", children: [_jsxs("button", { onClick: () => handleRequestSession(), className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E7EEE8] dark:bg-[#262E2A] text-[#60756A] dark:text-[#758D81] text-xs font-medium hover:bg-[#dce5dd] transition-colors", title: "Request a dedicated 30-min voice or video peer session", children: [_jsx(Calendar, { className: "w-3.5 h-3.5" }), _jsx("span", { children: sessionRequested ? 'Session Requested' : 'Request Session' })] }), _jsx("button", { onClick: () => setShowOptionsDropdown(!showOptionsDropdown), className: "p-2 rounded-full text-[#77817B] hover:text-[#252B28] hover:bg-[#E7EEE8] dark:hover:bg-[#262E2A]", children: _jsx(MoreVertical, { className: "w-4 h-4" }) }), _jsx("button", { onClick: onClose, className: "p-2 rounded-full text-[#77817B] hover:text-[#252B28] hover:bg-[#E7EEE8] dark:hover:bg-[#262E2A]", children: _jsx(X, { className: "w-4 h-4" }) }), showOptionsDropdown && (_jsxs("div", { className: "absolute right-0 top-11 w-52 bg-[#FFFFFF] dark:bg-[#1D2320] rounded-2xl shadow-xl border border-[rgba(37,43,40,0.08)] py-1.5 z-50 text-xs", children: [_jsxs("button", { onClick: handleRequestSession, className: "w-full text-left px-4 py-2 hover:bg-[#E7EEE8] dark:hover:bg-[#262E2A] flex items-center gap-2", children: [_jsx(Calendar, { className: "w-3.5 h-3.5" }), " Request Structured Session"] }), _jsxs("button", { onClick: onSwitchToTherapist, className: "w-full text-left px-4 py-2 hover:bg-[#E7EEE8] dark:hover:bg-[#262E2A] flex items-center gap-2 text-[#60756A] dark:text-[#758D81]", children: [_jsx(Sparkles, { className: "w-3.5 h-3.5" }), " Switch to Licensed Therapist"] }), _jsxs("button", { onClick: onOpenLifeline, className: "w-full text-left px-4 py-2 hover:bg-[#E7EEE8] dark:hover:bg-[#262E2A] flex items-center gap-2 text-[#93000A] dark:text-[#FFDAD6]", children: [_jsx(LifeBuoy, { className: "w-3.5 h-3.5" }), " Urgent Crisis Support"] }), _jsx("div", { className: "border-t border-[rgba(37,43,40,0.06)] my-1" }), _jsxs("button", { onClick: handleReportBlock, className: "w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center gap-2", children: [_jsx(ShieldAlert, { className: "w-3.5 h-3.5" }), " Report or Block Buddy"] })] }))] })] }), _jsxs("div", { className: "px-4 py-2 bg-[#F0E8DD]/70 dark:bg-[#2A302B]/70 border-b border-[rgba(37,43,40,0.04)] text-[11px] text-[#57615B] dark:text-[#A4AEA7] flex items-center justify-between", children: [_jsx("span", { children: "Peer conversation \u00B7 Confidential & Non-clinical" }), _jsx("button", { onClick: onOpenLifeline, className: "text-[#93000A] dark:text-[#FFDAD6] font-medium hover:underline flex items-center gap-1", children: _jsx("span", { children: "In immediate crisis?" }) })] }), _jsxs("div", { className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-4", children: [_jsxs("div", { className: "p-4 rounded-2xl bg-[#E7EEE8]/60 dark:bg-[#262E2A]/60 text-xs text-[#57615B] dark:text-[#A4AEA7] text-center max-w-md mx-auto space-y-1", children: [_jsxs("p", { className: "font-semibold text-[#252B28] dark:text-[#EAECE5]", children: ["You are connected with ", buddy.name] }), _jsx("p", { children: "This is a low-pressure listening space. Take pauses, reply in fragments, or share whatever feels comfortable." })] }), blockReported && (_jsx("div", { className: "p-3 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs text-center", children: "Conversation flagged. You will not be matched with this Buddy again." })), messages.map((msg) => {
                            const isUser = msg.sender === 'user';
                            return (_jsxs("div", { className: `flex flex-col ${isUser ? 'items-end' : 'items-start'}`, children: [_jsx("div", { className: `max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${isUser
                                            ? 'bg-[#60756A] text-[#F7F8F3] rounded-br-xs'
                                            : 'bg-[#F7F8F3] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] rounded-bl-xs border border-[rgba(37,43,40,0.04)]'}`, children: msg.text }), _jsx("span", { className: "text-[10px] text-[#77817B] dark:text-[#A4AEA7] mt-1 px-1", children: msg.timestamp })] }, msg.id));
                        }), isTyping && (_jsxs("div", { className: "flex items-center gap-1.5 p-3 rounded-2xl bg-[#F7F8F3] dark:bg-[#262E2A] w-16 text-[#77817B]", children: [_jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#60756A] animate-bounce [animation-delay:-0.3s]" }), _jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#60756A] animate-bounce [animation-delay:-0.15s]" }), _jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#60756A] animate-bounce" })] })), _jsx("div", { ref: messagesEndRef })] }), messages.length <= 2 && (_jsxs("div", { className: "px-4 py-2 border-t border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] bg-[#F7F8F3]/50 dark:bg-[#161B18]/50", children: [_jsx("span", { className: "text-[10px] uppercase font-semibold text-[#77817B] block mb-1.5", children: "Not sure how to begin? Tap an opener:" }), _jsx("div", { className: "flex flex-wrap gap-1.5", children: BUDDY_CHAT_PROMPTS.map((prompt) => (_jsxs("button", { onClick: () => handlePromptClick(prompt), className: "px-3 py-1.5 rounded-full text-xs bg-[#FFFFFF] dark:bg-[#262E2A] hover:bg-[#E7EEE8] dark:hover:bg-[#323b35] text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.08)] transition-colors text-left", children: ["\u201C", prompt, "\u201D"] }, prompt))) })] })), _jsx("div", { className: "p-3 sm:p-4 bg-[#FFFFFF] dark:bg-[#1D2320] border-t border-[rgba(37,43,40,0.08)] dark:border-[rgba(234,236,229,0.08)]", children: _jsxs("form", { onSubmit: (e) => {
                            e.preventDefault();
                            handleSendMessage();
                        }, className: "flex items-center gap-2", children: [_jsx("input", { type: "text", value: inputText, onChange: (e) => setInputText(e.target.value), placeholder: `Message ${buddy.name.split(' ')[0]}...`, className: "flex-1 px-4 py-2.5 rounded-full bg-[#F7F8F3] dark:bg-[#262E2A] text-xs sm:text-sm text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.08)] focus:outline-none focus:ring-2 focus:ring-[#60756A]" }), _jsx("button", { type: "submit", disabled: !inputText.trim(), className: `p-2.5 rounded-full transition-colors ${inputText.trim()
                                    ? 'bg-[#60756A] text-[#F7F8F3] hover:bg-[#51635A]'
                                    : 'bg-[#E7EEE8] dark:bg-[#262E2A] text-[#77817B] cursor-not-allowed'}`, children: _jsx(Send, { className: "w-4 h-4" }) })] }) })] }) }));
};
