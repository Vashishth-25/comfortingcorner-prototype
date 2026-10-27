import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { X, LifeBuoy, Phone, ExternalLink, Heart } from 'lucide-react';
import { INDIAN_GOVT_RESOURCES } from '../data/mockData.js';
export const UrgentLifelineModal = ({ isOpen, onClose }) => {
    const [breathPhase, setBreathPhase] = useState('Inhale');
    const [seconds, setSeconds] = useState(4);
    // Gentle 4-4-4 box breathing timer for nervous system grounding
    useEffect(() => {
        if (!isOpen)
            return;
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev <= 1) {
                    setBreathPhase((current) => {
                        if (current === 'Inhale')
                            return 'Hold';
                        if (current === 'Hold')
                            return 'Exhale';
                        return 'Inhale';
                    });
                    return 4;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isOpen, breathPhase]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto", children: _jsxs("div", { className: "bg-[#FFFFFF] dark:bg-[#1D2320] w-full max-w-xl rounded-3xl shadow-2xl border border-[rgba(37,43,40,0.08)] dark:border-[rgba(234,236,229,0.08)] p-6 sm:p-8 text-[#252B28] dark:text-[#EAECE5] my-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-2.5", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-[#F5E6DF] dark:bg-[#332B28] flex items-center justify-center text-[#93000A] dark:text-[#FFDAD6]", children: _jsx(LifeBuoy, { className: "w-4 h-4" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold tracking-tight text-[#93000A] dark:text-[#FFDAD6]", children: "Verified Indian Mental-Health & Emergency Resources" }), _jsx("p", { className: "text-xs text-[#77817B] dark:text-[#A4AEA7]", children: "Free, 24/7 confidential government helplines across India." })] })] }), _jsx("button", { onClick: onClose, className: "p-2 rounded-full hover:bg-[#E7EEE8] dark:hover:bg-[#262E2A] text-[#77817B]", children: _jsx(X, { className: "w-5 h-5" }) })] }), _jsxs("div", { className: "p-3.5 rounded-2xl bg-[#F5E6DF] dark:bg-[#332B28] text-xs text-[#93000A] dark:text-[#FFDAD6] leading-relaxed mb-5", children: [_jsx("strong", { children: "Immediate Safety Notice:" }), " If you or someone you know is in acute danger or having thoughts of harming yourself, do not wait for a scheduled session. Call 112 or Tele-MANAS at 14416 immediately."] }), _jsxs("div", { className: "mb-5 p-4 rounded-2xl bg-[#E7EEE8]/60 dark:bg-[#262E2A]/60 flex items-center justify-between gap-4 border border-[rgba(37,43,40,0.04)]", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: `w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-1000 ${breathPhase === 'Inhale'
                                        ? 'scale-110 bg-[#60756A] text-[#F7F8F3]'
                                        : breathPhase === 'Hold'
                                            ? 'scale-105 bg-[#585760] text-[#F7F8F3]'
                                            : 'scale-95 bg-[#E7EEE8] text-[#252B28]'}`, children: [seconds, "s"] }), _jsxs("div", { children: [_jsxs("span", { className: "text-xs font-semibold text-[#252B28] dark:text-[#EAECE5] block", children: [breathPhase, "..."] }), _jsx("span", { className: "text-[11px] text-[#77817B] dark:text-[#A4AEA7]", children: "Take a gentle, grounded breath right now." })] })] }), _jsx(Heart, { className: "w-5 h-5 text-[#60756A] shrink-0" })] }), _jsx("div", { className: "space-y-3 max-h-[46vh] overflow-y-auto pr-1", children: INDIAN_GOVT_RESOURCES.map((res) => (_jsxs("div", { className: "p-4 rounded-2xl bg-[#F7F8F3] dark:bg-[#262E2A] border border-[rgba(37,43,40,0.06)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs", children: [_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h4", { className: "font-semibold text-sm text-[#252B28] dark:text-[#EAECE5]", children: res.name }), _jsx("span", { className: "text-[10px] text-[#77817B] bg-[#E7EEE8] dark:bg-[#1D2320] px-2 py-0.2 rounded-full font-medium", children: res.shortCode ? `Dial ${res.shortCode}` : 'Toll-Free' })] }), _jsxs("p", { className: "text-[11px] text-[#77817B] font-medium", children: [res.subtitle, " \u00B7 ", res.availability] }), _jsx("p", { className: "text-[11px] text-[#57615B] dark:text-[#A4AEA7] leading-relaxed", children: res.desc })] }), _jsxs("div", { className: "flex items-center gap-2 self-start sm:self-center shrink-0", children: [_jsxs("a", { href: res.telHref, className: "px-4 py-2 rounded-xl bg-[#60756A] hover:bg-[#51635A] text-[#F7F8F3] font-semibold text-xs whitespace-nowrap text-center transition-colors flex items-center justify-center gap-1.5", children: [_jsx(Phone, { className: "w-3.5 h-3.5" }), _jsxs("span", { children: ["Call ", res.shortCode || res.tollFree] })] }), _jsx("a", { href: res.website, target: "_blank", rel: "noreferrer", className: "p-2 rounded-xl border border-[rgba(37,43,40,0.1)] text-[#77817B] hover:text-[#252B28]", title: "Visit official portal", children: _jsx(ExternalLink, { className: "w-3.5 h-3.5" }) })] })] }, res.name))) }), _jsxs("div", { className: "mt-5 pt-4 border-t border-[rgba(37,43,40,0.06)] flex items-center justify-between text-[11px] text-[#77817B] dark:text-[#A4AEA7]", children: [_jsx("span", { children: "Comforting Corner is not an emergency psychiatric hospital." }), _jsx("button", { onClick: onClose, className: "px-5 py-2 rounded-full bg-[#E7EEE8] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] font-medium", children: "Close" })] })] }) }));
};
