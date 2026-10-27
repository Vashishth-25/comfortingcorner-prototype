import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, RotateCcw, ShieldCheck, Users, Clock, AlertCircle } from 'lucide-react';
export const VideoCallScreen = ({ booking, isOpen, onEndCall, }) => {
    const [isMicMuted, setIsMicMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [callDuration, setCallDuration] = useState(0);
    const [providerJoined, setProviderJoined] = useState(false);
    const [permissionError, setPermissionError] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState('connecting');
    const [streamActive, setStreamActive] = useState(false);
    const localVideoRef = useRef(null);
    const localStreamRef = useRef(null);
    // Initialize camera and microphone permissions gracefully
    useEffect(() => {
        if (!isOpen)
            return;
        let mounted = true;
        setConnectionStatus('connecting');
        setProviderJoined(false);
        setPermissionError(null);
        setCallDuration(0);
        // Request browser camera and microphone
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then((stream) => {
                if (!mounted)
                    return;
                localStreamRef.current = stream;
                setStreamActive(true);
                if (localVideoRef.current) {
                    localVideoRef.current.srcObject = stream;
                }
                setConnectionStatus('connected');
            })
                .catch((err) => {
                if (!mounted)
                    return;
                console.warn('Media devices not accessible or permission denied:', err);
                setPermissionError('Camera or microphone access was not granted. Running in simulated interactive video mode.');
                setConnectionStatus('connected');
            });
        }
        else {
            setPermissionError('Browser media devices not supported in this frame. Running in simulated video mode.');
            setConnectionStatus('connected');
        }
        // Provider simulated join after 5 seconds
        const timer = setTimeout(() => {
            if (mounted) {
                setProviderJoined(true);
            }
        }, 4500);
        return () => {
            mounted = false;
            clearTimeout(timer);
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach((track) => track.stop());
                localStreamRef.current = null;
            }
        };
    }, [isOpen]);
    // Duration timer
    useEffect(() => {
        if (!isOpen || connectionStatus !== 'connected')
            return;
        const interval = setInterval(() => {
            setCallDuration((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isOpen, connectionStatus]);
    // Handle Mute
    const toggleMic = () => {
        if (localStreamRef.current) {
            localStreamRef.current.getAudioTracks().forEach((track) => {
                track.enabled = isMicMuted;
            });
        }
        setIsMicMuted(!isMicMuted);
    };
    // Handle Video
    const toggleVideo = () => {
        if (localStreamRef.current) {
            localStreamRef.current.getVideoTracks().forEach((track) => {
                track.enabled = isVideoOff;
            });
        }
        setIsVideoOff(!isVideoOff);
    };
    // Handle Reconnect
    const handleReconnect = () => {
        setConnectionStatus('reconnecting');
        setTimeout(() => {
            setConnectionStatus('connected');
        }, 1500);
    };
    if (!isOpen || !booking)
        return null;
    const formatDuration = (secs) => {
        const mins = Math.floor(secs / 60);
        const remainder = secs % 60;
        return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
    };
    return (_jsxs("div", { className: "fixed inset-0 z-50 bg-[#161B18] text-[#EAECE5] flex flex-col", children: [_jsxs("div", { className: "px-6 py-4 bg-[#1D2320]/90 backdrop-blur border-b border-[rgba(234,236,229,0.08)] flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-[#758D81] flex items-center justify-center font-bold text-xs text-[#161B18]", children: "CC" }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("h3", { className: "text-sm font-semibold text-[#EAECE5]", children: booking.providerName }), _jsx("span", { className: "text-[10px] bg-[#262E2A] text-[#758D81] px-2 py-0.5 rounded-full font-medium", children: booking.serviceType === 'therapist' ? 'Clinical Session' : 'Peer Session' })] }), _jsxs("div", { className: "text-[11px] text-[#A4AEA7] flex items-center gap-2 mt-0.5", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-3 h-3 text-[#758D81]" }), _jsx("span", { children: formatDuration(callDuration) })] }), _jsx("span", { children: "\u00B7" }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(ShieldCheck, { className: "w-3 h-3 text-[#758D81]" }), _jsx("span", { children: "End-to-End Encrypted (Demo)" })] })] })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("button", { onClick: handleReconnect, className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#262E2A] hover:bg-[#323b35] text-xs font-medium transition-colors", title: "Reconnect stream", children: [_jsx(RotateCcw, { className: `w-3.5 h-3.5 ${connectionStatus === 'reconnecting' ? 'animate-spin' : ''}` }), _jsx("span", { children: "Reconnect" })] }), _jsxs("button", { onClick: onEndCall, className: "px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-[#FFFFFF] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm", children: [_jsx(PhoneOff, { className: "w-4 h-4" }), _jsx("span", { children: "End Call" })] })] })] }), _jsxs("div", { className: "flex-1 relative p-4 sm:p-6 flex items-center justify-center overflow-hidden", children: [permissionError && (_jsxs("div", { className: "absolute top-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-amber-950/80 border border-amber-600/40 rounded-full text-amber-200 text-xs flex items-center gap-2 shadow-lg max-w-lg text-center", children: [_jsx(AlertCircle, { className: "w-4 h-4 shrink-0" }), _jsx("span", { children: permissionError })] })), _jsxs("div", { className: "w-full h-full max-w-5xl rounded-3xl bg-[#1D2320] border border-[rgba(234,236,229,0.06)] relative overflow-hidden flex items-center justify-center shadow-2xl", children: [providerJoined ? (_jsx("div", { className: "relative w-full h-full flex items-center justify-center bg-radial from-[#262E2A] to-[#1D2320]", children: _jsxs("div", { className: "text-center space-y-4", children: [_jsxs("div", { className: "relative inline-block", children: [_jsx("img", { src: booking.providerAvatar, alt: booking.providerName, referrerPolicy: "no-referrer", className: "w-32 h-32 rounded-3xl object-cover border-2 border-[#758D81] shadow-xl mx-auto" }), _jsx("span", { className: "absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#1D2320]" })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-[#EAECE5]", children: booking.providerName }), _jsx("p", { className: "text-xs text-[#758D81] font-medium", children: booking.providerTitle }), _jsx("p", { className: "text-[11px] text-[#A4AEA7] mt-1", children: "Live Video Connected \u00B7 Audio Active" })] })] }) })) : (
                            /* WAITING ROOM STATE */
                            _jsxs("div", { className: "text-center p-8 max-w-md space-y-4", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-[#262E2A] text-[#758D81] flex items-center justify-center mx-auto animate-pulse", children: _jsx(Users, { className: "w-8 h-8" }) }), _jsxs("h3", { className: "text-lg font-semibold text-[#EAECE5]", children: ["Waiting for ", booking.providerName, " to join..."] }), _jsx("p", { className: "text-xs text-[#A4AEA7] leading-relaxed", children: "Your consultation room is open. Providers usually connect within a few moments of the scheduled start time." }), _jsx("div", { className: "inline-block px-4 py-1.5 rounded-full bg-[#262E2A] text-[11px] text-[#758D81] font-medium", children: "Connecting to secure video bridge..." })] })), _jsxs("div", { className: "absolute bottom-6 right-6 w-36 sm:w-48 h-28 sm:h-36 rounded-2xl bg-[#262E2A] border border-[rgba(234,236,229,0.15)] shadow-2xl overflow-hidden flex items-center justify-center", children: [streamActive && !isVideoOff ? (_jsx("video", { ref: localVideoRef, autoPlay: true, playsInline: true, muted: true, className: "w-full h-full object-cover mirror" })) : (_jsxs("div", { className: "text-center p-2", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-[#1D2320] text-[#758D81] flex items-center justify-center mx-auto text-xs font-semibold mb-1", children: "You" }), _jsx("span", { className: "text-[10px] text-[#A4AEA7]", children: isVideoOff ? 'Camera Off' : 'Preview Active' })] })), isMicMuted && (_jsx("span", { className: "absolute top-2 right-2 p-1 rounded-full bg-red-600/80 text-white", children: _jsx(MicOff, { className: "w-3 h-3" }) }))] })] })] }), _jsxs("div", { className: "px-6 py-5 bg-[#1D2320]/95 backdrop-blur border-t border-[rgba(234,236,229,0.08)] flex items-center justify-center gap-4", children: [_jsx("button", { onClick: toggleMic, className: `p-3.5 rounded-full transition-all ${isMicMuted
                            ? 'bg-red-600/80 text-white hover:bg-red-700'
                            : 'bg-[#262E2A] text-[#EAECE5] hover:bg-[#323b35]'}`, title: isMicMuted ? 'Unmute microphone' : 'Mute microphone', children: isMicMuted ? _jsx(MicOff, { className: "w-5 h-5" }) : _jsx(Mic, { className: "w-5 h-5" }) }), _jsx("button", { onClick: toggleVideo, className: `p-3.5 rounded-full transition-all ${isVideoOff
                            ? 'bg-red-600/80 text-white hover:bg-red-700'
                            : 'bg-[#262E2A] text-[#EAECE5] hover:bg-[#323b35]'}`, title: isVideoOff ? 'Turn camera on' : 'Turn camera off', children: isVideoOff ? _jsx(VideoOff, { className: "w-5 h-5" }) : _jsx(Video, { className: "w-5 h-5" }) }), _jsxs("button", { onClick: onEndCall, className: "px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-[#FFFFFF] text-xs font-semibold flex items-center gap-2 transition-all shadow-md ml-2", children: [_jsx(PhoneOff, { className: "w-4 h-4" }), _jsx("span", { children: "Leave Room" })] })] })] }));
};
