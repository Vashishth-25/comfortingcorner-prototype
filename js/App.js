import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.js';
import { LandingPage } from './components/LandingPage.js';
import { AuthOnboardingModal } from './components/AuthOnboardingModal.js';
import { BuddySection } from './components/BuddySection.js';
import { BuddyProfileModal } from './components/BuddyProfileModal.js';
import { BuddyChatModal } from './components/BuddyChatModal.js';
import { TherapistSection } from './components/TherapistSection.js';
import { TherapistProfileModal } from './components/TherapistProfileModal.js';
import { ScheduleSessionModal } from './components/ScheduleSessionModal.js';
import { VideoCallScreen } from './components/VideoCallScreen.js';
import { SessionsManager } from './components/SessionsManager.js';
import { CcPointsModal } from './components/CcPointsModal.js';
import { UrgentLifelineModal } from './components/UrgentLifelineModal.js';
import { SavedDrawer } from './components/SavedDrawer.js';
export default function App() {
    // Navigation View State: 'landing' vs 'dashboard'
    const [currentView, setCurrentView] = useState('landing');
    const [activeMode, setActiveMode] = useState('buddy');
    // Theme State
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('cc_theme') || 'light';
    });
    // Language State: 'en' | 'hi'
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('cc_language') || 'en';
    });
    // User Session State
    const [session, setSession] = useState(() => {
        const saved = localStorage.getItem('cc_session');
        if (saved) {
            try {
                return JSON.parse(saved);
            }
            catch (e) {
                return { isLoggedIn: false };
            }
        }
        return { isLoggedIn: false };
    });
    // Saved / Favorite Profiles
    const [savedIds, setSavedIds] = useState(() => {
        const saved = localStorage.getItem('cc_saved_ids');
        if (saved) {
            try {
                return JSON.parse(saved);
            }
            catch (e) {
                return ['b-1', 't-1'];
            }
        }
        return ['b-1', 't-1'];
    });
    // Booked Sessions (with authentic initial demonstration booking)
    const [bookings, setBookings] = useState(() => {
        const saved = localStorage.getItem('cc_bookings_inr');
        if (saved) {
            try {
                return JSON.parse(saved);
            }
            catch (e) {
                return [];
            }
        }
        // Realistic Indian demonstration appointment
        return [
            {
                id: 'booking-demo-1',
                providerId: 't-1',
                providerName: 'Dr. Meera Iyer',
                providerTitle: 'Clinical Psychologist',
                providerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
                serviceType: 'therapist',
                date: 'Today',
                time: '8:30 PM IST',
                timeZone: 'IST (Asia/Kolkata)',
                mode: 'Online Video',
                price: 1500, // ₹1,500 tier
                duration: '50 minutes',
                status: 'confirmed',
                clientNotes: 'Navigating academic pressure and sleep routines.',
                createdAt: new Date().toISOString(),
            },
        ];
    });
    // Modals & Drawers State
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isCcPointsOpen, setIsCcPointsOpen] = useState(false);
    const [isLifelineOpen, setIsLifelineOpen] = useState(false);
    const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
    const [isSessionsDashboardOpen, setIsSessionsDashboardOpen] = useState(false);
    // Selected Profile Modals
    const [selectedBuddy, setSelectedBuddy] = useState(null);
    const [activeChatBuddy, setActiveChatBuddy] = useState(null);
    const [selectedTherapist, setSelectedTherapist] = useState(null);
    // Central Scheduling Flow State
    const [schedulingProvider, setSchedulingProvider] = useState(null);
    // Video Call Screen State
    const [activeVideoBooking, setActiveVideoBooking] = useState(null);
    // Search State
    const [searchQuery, setSearchQuery] = useState('');
    // Apply Theme
    useEffect(() => {
        localStorage.setItem('cc_theme', theme);
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        }
        else if (theme === 'light') {
            root.classList.remove('dark');
        }
        else {
            // system
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                root.classList.add('dark');
            }
            else {
                root.classList.remove('dark');
            }
        }
    }, [theme]);
    // Persist Language
    useEffect(() => {
        localStorage.setItem('cc_language', language);
    }, [language]);
    // Persist Saved IDs
    useEffect(() => {
        localStorage.setItem('cc_saved_ids', JSON.stringify(savedIds));
    }, [savedIds]);
    // Persist Bookings
    useEffect(() => {
        localStorage.setItem('cc_bookings_inr', JSON.stringify(bookings));
    }, [bookings]);
    // Persist Session
    useEffect(() => {
        localStorage.setItem('cc_session', JSON.stringify(session));
    }, [session]);
    const handleToggleSave = (id) => {
        setSavedIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
    };
    const handleAuthComplete = (user, chosenMode) => {
        setSession({
            isLoggedIn: true,
            user,
        });
        setActiveMode(chosenMode);
        setCurrentView('dashboard');
    };
    const handleStartSupportFromLanding = (mode) => {
        if (mode) {
            setActiveMode(mode);
        }
        if (session.isLoggedIn) {
            setCurrentView('dashboard');
        }
        else {
            setIsAuthOpen(true);
        }
    };
    const handleBookingConfirmed = (newBooking) => {
        setBookings((prev) => [newBooking, ...prev]);
    };
    const handleCancelBooking = (bookingId) => {
        setBookings((prev) => prev.map((b) => (b.id === bookingId ? { ...b, status: 'cancelled' } : b)));
    };
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-[#F7F8F3] dark:bg-[#161B18] text-[#252B28] dark:text-[#EAECE5] transition-colors font-sans", children: [currentView === 'landing' ? (_jsx(LandingPage, { onStartSupport: handleStartSupportFromLanding, onSelectBuddyPreview: () => {
                    setActiveMode('buddy');
                    setCurrentView('dashboard');
                }, onSelectTherapistPreview: () => {
                    setActiveMode('therapist');
                    setCurrentView('dashboard');
                }, theme: theme, onToggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'), onOpenLifeline: () => setIsLifelineOpen(true) })) : (
            /* MAIN DASHBOARD APPLICATION SHELL */
            _jsxs(_Fragment, { children: [_jsx(Header, { activeMode: activeMode, onModeChange: (mode) => {
                            setActiveMode(mode);
                            setSearchQuery('');
                        }, theme: theme, onThemeChange: setTheme, language: language, onLanguageChange: setLanguage, onOpenLifeline: () => setIsLifelineOpen(true), onOpenCcPoints: () => setIsCcPointsOpen(true), onOpenSaved: () => setIsSavedDrawerOpen(true), onOpenSessions: () => setIsSessionsDashboardOpen(true), onOpenAuth: () => setIsAuthOpen(true), savedCount: savedIds.length, sessionCount: bookings.filter((b) => b.status === 'confirmed').length, session: session, onNavigateHome: () => setCurrentView('landing'), searchQuery: searchQuery, onSearchChange: setSearchQuery }), _jsx("div", { className: "bg-[#FFFFFF]/60 dark:bg-[#1D2320]/60 border-b border-[rgba(37,43,40,0.04)] py-2 px-4 sm:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between text-xs text-[#77817B] dark:text-[#A4AEA7]", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: () => setCurrentView('landing'), className: "hover:underline text-[#252B28] dark:text-[#EAECE5]", children: "Comforting Corner" }), _jsx("span", { children: "/" }), _jsx("span", { className: "font-semibold text-[#60756A] dark:text-[#758D81]", children: activeMode === 'buddy'
                                                ? (language === 'hi' ? 'पीयर बडी सपोर्ट (₹150–₹400)' : 'Peer Buddies (₹150–₹400)')
                                                : (language === 'hi' ? 'लाइसेंस प्राप्त थेरेपिस्ट (₹900–₹2,200)' : 'Licensed Therapists (₹900–₹2,200)') })] }), _jsxs("div", { className: "hidden sm:flex items-center gap-4", children: [_jsx("span", { children: language === 'hi' ? 'गोपनीय एवं सुरक्षित' : 'Safe & Confidential Space' }), _jsx("span", { children: "\u00B7" }), _jsx("a", { href: "tel:14416", className: "text-[#93000A] dark:text-[#FFDAD6] font-semibold hover:underline", children: "Tele-MANAS: 14416" })] })] }) }), _jsx("main", { className: "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8", children: activeMode === 'buddy' ? (_jsx(BuddySection, { onSelectBuddy: setSelectedBuddy, onScheduleSession: (b) => setSchedulingProvider({ provider: b, serviceType: 'buddy' }), onStartChat: setActiveChatBuddy, savedIds: savedIds, onToggleSave: handleToggleSave, onOpenCcPoints: () => setIsCcPointsOpen(true), searchQuery: searchQuery, onSearchChange: setSearchQuery, language: language })) : (_jsx(TherapistSection, { onSelectTherapist: setSelectedTherapist, onScheduleSession: (t) => setSchedulingProvider({ provider: t, serviceType: 'therapist' }), savedIds: savedIds, onToggleSave: handleToggleSave, onOpenCcPoints: () => setIsCcPointsOpen(true), searchQuery: searchQuery, onSearchChange: setSearchQuery, language: language })) }), _jsx("footer", { className: "mt-auto border-t border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] bg-[#F7F8F3] dark:bg-[#161B18] py-8 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77817B] dark:text-[#A4AEA7]", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-6 h-6 rounded-full bg-[#60756A] text-[#F7F8F3] flex items-center justify-center font-bold text-[10px]", children: "CC" }), _jsx("span", { children: "Comforting Corner \u00B7 You don\u2019t have to figure everything out alone." })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: () => setIsLifelineOpen(true), className: "text-[#93000A] dark:text-[#FFDAD6] font-semibold hover:underline", children: "Tele-MANAS (14416) & Emergency (112)" }), _jsx("span", { children: "\u00B7" }), _jsx("button", { onClick: () => setIsCcPointsOpen(true), className: "hover:underline", children: "CC Points System" }), _jsx("span", { children: "\u00B7" }), _jsx("span", { children: "India Demonstration Prototype" })] })] }) })] })), _jsx(AuthOnboardingModal, { isOpen: isAuthOpen, onClose: () => setIsAuthOpen(false), onComplete: handleAuthComplete, initialMode: activeMode }), _jsx(ScheduleSessionModal, { isOpen: !!schedulingProvider, onClose: () => setSchedulingProvider(null), provider: schedulingProvider?.provider || null, serviceType: schedulingProvider?.serviceType || 'buddy', language: language, onBookingConfirmed: handleBookingConfirmed, onGoToSessions: () => setIsSessionsDashboardOpen(true), onSwitchToTherapist: () => {
                    setActiveMode('therapist');
                    setSchedulingProvider(null);
                } }), _jsx(VideoCallScreen, { booking: activeVideoBooking, isOpen: !!activeVideoBooking, onEndCall: () => setActiveVideoBooking(null) }), _jsx(SessionsManager, { isOpen: isSessionsDashboardOpen, onClose: () => setIsSessionsDashboardOpen(false), bookings: bookings, onJoinVideoSession: (booking) => {
                    setIsSessionsDashboardOpen(false);
                    setActiveVideoBooking(booking);
                }, onCancelBooking: handleCancelBooking, onBookNewSession: () => {
                    setIsSessionsDashboardOpen(false);
                } }), _jsx(BuddyProfileModal, { buddy: selectedBuddy, isOpen: !!selectedBuddy, onClose: () => setSelectedBuddy(null), onStartChat: (buddy) => {
                    setSelectedBuddy(null);
                    setActiveChatBuddy(buddy);
                }, onScheduleSession: (b) => {
                    setSelectedBuddy(null);
                    setSchedulingProvider({ provider: b, serviceType: 'buddy' });
                }, isSaved: selectedBuddy ? savedIds.includes(selectedBuddy.id) : false, onToggleSave: handleToggleSave, onOpenCcPoints: () => setIsCcPointsOpen(true) }), _jsx(BuddyChatModal, { buddy: activeChatBuddy, isOpen: !!activeChatBuddy, onClose: () => setActiveChatBuddy(null), onOpenLifeline: () => setIsLifelineOpen(true), onSwitchToTherapist: () => {
                    setActiveChatBuddy(null);
                    setActiveMode('therapist');
                } }), _jsx(TherapistProfileModal, { therapist: selectedTherapist, isOpen: !!selectedTherapist, onClose: () => setSelectedTherapist(null), onScheduleSession: (t) => {
                    setSelectedTherapist(null);
                    setSchedulingProvider({ provider: t, serviceType: 'therapist' });
                }, isSaved: selectedTherapist ? savedIds.includes(selectedTherapist.id) : false, onToggleSave: handleToggleSave, onOpenCcPoints: () => setIsCcPointsOpen(true) }), _jsx(CcPointsModal, { isOpen: isCcPointsOpen, onClose: () => setIsCcPointsOpen(false) }), _jsx(UrgentLifelineModal, { isOpen: isLifelineOpen, onClose: () => setIsLifelineOpen(false) }), _jsx(SavedDrawer, { isOpen: isSavedDrawerOpen, onClose: () => setIsSavedDrawerOpen(false), savedIds: savedIds, onToggleSave: handleToggleSave, onSelectBuddy: (b) => {
                    setActiveMode('buddy');
                    setSelectedBuddy(b);
                }, onSelectTherapist: (t) => {
                    setActiveMode('therapist');
                    setSelectedTherapist(t);
                } })] }));
}
