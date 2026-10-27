import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useMemo } from 'react';
import { Search, Sparkles, CheckCircle2, Heart, Calendar, Clock, X } from 'lucide-react';
import { THERAPIST_CONCERNS, SAMPLE_THERAPISTS } from '../data/mockData.js';
export const TherapistSection = ({ onSelectTherapist, onScheduleSession, savedIds, onToggleSave, onOpenCcPoints, searchQuery, onSearchChange, language, }) => {
    const [selectedConcerns, setSelectedConcerns] = useState([]);
    const [selectedModality, setSelectedModality] = useState('all');
    const [selectedPriceTier, setSelectedPriceTier] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');
    const [sortBy, setSortBy] = useState('match');
    const toggleConcern = (concern) => {
        if (concern === 'Other / Not sure yet') {
            setSelectedConcerns((prev) => prev.includes(concern) ? [] : [concern]);
            return;
        }
        setSelectedConcerns((prev) => prev.includes(concern) ? prev.filter((c) => c !== concern) : [...prev, concern]);
    };
    const clearConcernFilters = () => {
        setSelectedConcerns([]);
    };
    // Filtered therapists
    const filteredTherapists = useMemo(() => {
        return SAMPLE_THERAPISTS.filter((therapist) => {
            // Search
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                const matchesName = therapist.name.toLowerCase().includes(q);
                const matchesSpecialization = therapist.specializations.some((s) => s.toLowerCase().includes(q));
                const matchesApproach = therapist.approachDescription.toLowerCase().includes(q);
                const matchesModality = therapist.modalities.some((m) => m.toLowerCase().includes(q));
                if (!matchesName && !matchesSpecialization && !matchesApproach && !matchesModality)
                    return false;
            }
            // Selected concerns
            if (selectedConcerns.length > 0 && !selectedConcerns.includes('Other / Not sure yet')) {
                const matchesConcern = selectedConcerns.some((concern) => therapist.specializations.some((s) => s.toLowerCase().includes(concern.toLowerCase())));
                if (!matchesConcern)
                    return false;
            }
            // Modality filter
            if (selectedModality !== 'all') {
                const matchesMod = therapist.modalities.some((m) => m.toLowerCase().includes(selectedModality.toLowerCase()));
                if (!matchesMod)
                    return false;
            }
            // Price Filter (₹900 to ₹2,200)
            if (selectedPriceTier !== 'all') {
                if (selectedPriceTier === 'low' && therapist.price > 1100)
                    return false;
                if (selectedPriceTier === 'mid' && (therapist.price < 1200 || therapist.price > 1600))
                    return false;
                if (selectedPriceTier === 'high' && therapist.price < 1700)
                    return false;
            }
            // Language
            if (selectedLanguage !== 'all') {
                if (!therapist.languages.includes(selectedLanguage))
                    return false;
            }
            return true;
        }).sort((a, b) => {
            if (sortBy === 'priceAsc')
                return a.price - b.price;
            if (sortBy === 'priceDesc')
                return b.price - a.price;
            if (sortBy === 'experience')
                return b.experienceYears - a.experienceYears;
            // Match
            const aMatches = a.specializations.filter((s) => selectedConcerns.includes(s)).length;
            const bMatches = b.specializations.filter((s) => selectedConcerns.includes(s)).length;
            return bMatches - aMatches;
        });
    }, [searchQuery, selectedConcerns, selectedModality, selectedPriceTier, selectedLanguage, sortBy]);
    return (_jsxs("div", { className: "space-y-10 pb-20", children: [_jsx("div", { className: "relative rounded-3xl bg-gradient-to-r from-[#EDE9F5] via-[#F7F8F3] to-[#EDE9F5] dark:from-[#2B2833] dark:via-[#1D2320] dark:to-[#2B2833] p-7 sm:p-10 border border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] shadow-sm", children: _jsxs("div", { className: "max-w-2xl", children: [_jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF]/80 dark:bg-[#1D2320]/80 text-[11px] font-semibold uppercase tracking-wider text-[#585760] dark:text-[#C8C5D0] mb-3", children: [_jsx(Sparkles, { className: "w-3.5 h-3.5" }), _jsx("span", { children: "Licensed Clinical Directory \u00B7 \u20B9900\u2013\u20B92,200" })] }), _jsx("h1", { className: "text-3xl sm:text-4xl font-semibold text-[#252B28] dark:text-[#EAECE5] tracking-tight leading-tight mb-2.5", children: language === 'hi' ? 'विशेषज्ञ पेशेवर जो समझते हैं।' : 'Find a professional who understands.' }), _jsx("p", { className: "text-sm sm:text-base text-[#57615B] dark:text-[#A4AEA7] leading-relaxed mb-4", children: language === 'hi'
                                ? 'योग्य मनोवैज्ञानिकों की प्रोफाइल देखें, उनके दृष्टिकोण को समझें, और अपनी सुविधा अनुसार सत्र शेड्यूल करें।'
                                : 'Explore verified clinical psychologists and counselors across India. Review verified credentials, therapeutic approaches, and transparent fees.' }), _jsx("p", { className: "text-xs text-[#77817B] dark:text-[#A4AEA7] italic mb-6", children: "\u201CTake your time. Finding the right clinical fit matters.\u201D" }), _jsxs("div", { className: "relative max-w-xl", children: [_jsx(Search, { className: "w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#77817B]" }), _jsx("input", { type: "text", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), placeholder: "Search by concern, specialisation, or Indian therapist name...", className: "w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D2320] text-xs sm:text-sm text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.1)] dark:border-[rgba(234,236,229,0.1)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#585760]" }), searchQuery && (_jsx("button", { onClick: () => onSearchChange(''), className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#77817B]", children: _jsx(X, { className: "w-4 h-4" }) }))] })] }) }), _jsxs("div", { className: "bg-[#FFFFFF] dark:bg-[#1D2320] rounded-3xl p-6 sm:p-7 border border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] shadow-sm", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-base sm:text-lg font-semibold text-[#252B28] dark:text-[#EAECE5]", children: language === 'hi' ? 'चुनें कि आपको किस विषय में सहायता चाहिए' : 'Choose what you need support with' }), _jsx("p", { className: "text-xs text-[#77817B] dark:text-[#A4AEA7] mt-0.5", children: "Select any clinical areas to filter practitioners with verified specializations." })] }), selectedConcerns.length > 0 && (_jsxs("button", { onClick: clearConcernFilters, className: "text-xs text-[#585760] dark:text-[#C8C5D0] hover:underline font-medium flex items-center gap-1 self-start sm:self-center", children: [_jsx(X, { className: "w-3.5 h-3.5" }), _jsxs("span", { children: ["Clear selections (", selectedConcerns.length, ")"] })] }))] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2", children: THERAPIST_CONCERNS.map((concern) => {
                            const isSelected = selectedConcerns.includes(concern);
                            return (_jsxs("button", { onClick: () => toggleConcern(concern), className: `text-left p-2.5 rounded-2xl text-xs font-medium transition-all flex flex-col justify-between min-h-[68px] border ${isSelected
                                    ? 'bg-[#585760] text-[#F7F8F3] border-[#585760] shadow-sm'
                                    : 'bg-[#F7F8F3] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] hover:border-[#585760]/40'}`, children: [_jsx("span", { className: "line-clamp-2 leading-tight", children: concern }), isSelected && (_jsx("div", { className: "flex justify-end mt-1", children: _jsx(CheckCircle2, { className: "w-3 h-3 text-[#F7F8F3]" }) }))] }, concern));
                        }) })] }), _jsxs("div", { className: "bg-[#FFFFFF] dark:bg-[#1D2320] rounded-2xl p-4 border border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] flex flex-wrap items-center justify-between gap-4", children: [_jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: [_jsxs("select", { value: selectedModality, onChange: (e) => setSelectedModality(e.target.value), className: "px-3 py-2 rounded-xl bg-[#F7F8F3] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.06)] focus:outline-none", children: [_jsx("option", { value: "all", children: "All Modalities (CBT, ACT, etc.)" }), _jsx("option", { value: "CBT", children: "CBT (Cognitive Behavioral)" }), _jsx("option", { value: "ACT", children: "ACT (Acceptance & Commitment)" }), _jsx("option", { value: "Trauma", children: "Trauma-Informed & EMDR" }), _jsx("option", { value: "Family", children: "Systemic & Family Therapy" })] }), _jsxs("select", { value: selectedPriceTier, onChange: (e) => setSelectedPriceTier(e.target.value), className: "px-3 py-2 rounded-xl bg-[#F7F8F3] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.06)] focus:outline-none font-medium", children: [_jsx("option", { value: "all", children: "All Tiers (\u20B9900\u2013\u20B92,200)" }), _jsx("option", { value: "low", children: "Tiers \u20B9900\u2013\u20B91,100" }), _jsx("option", { value: "mid", children: "Tiers \u20B91,300\u2013\u20B91,500" }), _jsx("option", { value: "high", children: "Tiers \u20B91,700\u2013\u20B92,200" })] }), _jsxs("select", { value: selectedLanguage, onChange: (e) => setSelectedLanguage(e.target.value), className: "px-3 py-2 rounded-xl bg-[#F7F8F3] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.06)] focus:outline-none", children: [_jsx("option", { value: "all", children: "All Languages" }), _jsx("option", { value: "English", children: "English" }), _jsx("option", { value: "Hindi", children: "Hindi" }), _jsx("option", { value: "Tamil", children: "Tamil" }), _jsx("option", { value: "Punjabi", children: "Punjabi" }), _jsx("option", { value: "Kannada", children: "Kannada" }), _jsx("option", { value: "Malayalam", children: "Malayalam" })] })] }), _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "px-3 py-2 rounded-xl bg-[#F7F8F3] dark:bg-[#262E2A] text-[#252B28] dark:text-[#EAECE5] border border-[rgba(37,43,40,0.06)] focus:outline-none text-xs font-semibold text-[#585760] dark:text-[#C8C5D0]", children: [_jsx("option", { value: "match", children: "Best Clinical Match" }), _jsx("option", { value: "priceAsc", children: "Price: Low to High" }), _jsx("option", { value: "priceDesc", children: "Price: High to Low" }), _jsx("option", { value: "experience", children: "Years of Experience" })] })] }), _jsxs("div", { className: "flex items-center justify-between text-xs text-[#77817B] dark:text-[#A4AEA7] px-1", children: [_jsxs("span", { children: ["Showing ", filteredTherapists.length, " licensed Indian ", filteredTherapists.length === 1 ? 'practitioner' : 'practitioners'] }), _jsx("span", { children: "Credentials verified under Rehabilitation Council of India (RCI) guidelines." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredTherapists.map((therapist) => {
                    const isSaved = savedIds.includes(therapist.id);
                    return (_jsxs("div", { className: "bg-[#FFFFFF] dark:bg-[#1D2320] rounded-3xl p-6 border border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.08)] shadow-[0_4px_20px_-2px_rgba(37,43,40,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(37,43,40,0.06)] transition-all flex flex-col justify-between", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: therapist.avatar, alt: therapist.name, referrerPolicy: "no-referrer", className: "w-14 h-14 rounded-2xl object-cover border border-[rgba(37,43,40,0.08)]" }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("h3", { className: "text-base font-semibold text-[#252B28] dark:text-[#EAECE5]", children: therapist.name }), _jsx("span", { title: "Verified Clinical License", children: _jsx(CheckCircle2, { className: "w-4 h-4 text-[#60756A] dark:text-[#758D81]" }) })] }), _jsxs("p", { className: "text-xs font-medium text-[#585760] dark:text-[#C8C5D0]", children: [therapist.title, " \u00B7 ", therapist.experienceYears, " yrs exp"] }), _jsx("p", { className: "text-[11px] text-[#77817B] truncate max-w-[170px]", children: therapist.credentials.split('·')[0] })] })] }), _jsx("button", { onClick: () => onToggleSave(therapist.id), className: `p-2 rounded-full transition-colors ${isSaved
                                                    ? 'text-red-500 bg-red-50 dark:bg-red-950/30'
                                                    : 'text-[#77817B] hover:text-[#252B28] hover:bg-[#F7F8F3] dark:hover:bg-[#262E2A]'}`, title: isSaved ? 'Remove from saved' : 'Save profile', children: _jsx(Heart, { className: `w-4 h-4 ${isSaved ? 'fill-current' : ''}` }) })] }), _jsxs("div", { className: "mb-3.5 p-3 rounded-2xl bg-[#F7F8F3] dark:bg-[#262E2A] border border-[rgba(37,43,40,0.04)]", children: [_jsx("span", { className: "text-[10px] uppercase font-semibold text-[#77817B] tracking-wider block mb-1", children: "Therapy Approach" }), _jsx("p", { className: "text-xs text-[#252B28] dark:text-[#EAECE5] font-medium leading-relaxed", children: therapist.approachDescription })] }), _jsxs("div", { className: "mb-4", children: [_jsx("span", { className: "text-[10px] uppercase font-semibold text-[#77817B] tracking-wider block mb-1.5", children: "Areas of Expertise" }), _jsx("div", { className: "flex flex-wrap gap-1.5", children: therapist.specializations.slice(0, 3).map((spec) => (_jsx("span", { className: "px-2.5 py-0.8 rounded-lg text-[11px] bg-[#EDE9F5] dark:bg-[#2B2833] text-[#252B28] dark:text-[#EAECE5]", children: spec }, spec))) })] }), _jsxs("div", { className: "space-y-1.5 py-3 border-t border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] text-xs", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-[#77817B]", children: "Session Price:" }), _jsxs("span", { className: "font-bold text-sm text-[#252B28] dark:text-[#EAECE5]", children: ["\u20B9", therapist.price, " ", _jsxs("span", { className: "text-[11px] font-normal text-[#77817B]", children: ["/ ", therapist.sessionDuration] })] })] }), _jsxs("div", { className: "flex items-center justify-between text-[11px] text-[#77817B]", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "w-3 h-3 text-[#60756A]" }), _jsx("span", { children: therapist.nextAvailableSlot })] }), _jsxs("span", { children: ["Languages: ", therapist.languages.join(', ')] })] })] })] }), _jsxs("div", { className: "pt-4 border-t border-[rgba(37,43,40,0.06)] dark:border-[rgba(234,236,229,0.06)] flex items-center gap-2", children: [_jsx("button", { onClick: () => onSelectTherapist(therapist), className: "flex-1 py-2.5 rounded-xl border border-[rgba(37,43,40,0.15)] dark:border-[rgba(234,236,229,0.15)] text-xs font-medium text-[#252B28] dark:text-[#EAECE5] hover:bg-[#F7F8F3] dark:hover:bg-[#262E2A] transition-colors text-center", children: "View Profile" }), _jsxs("button", { onClick: () => onScheduleSession(therapist), className: "flex-1 py-2.5 rounded-xl bg-[#60756A] hover:bg-[#51635A] text-[#F7F8F3] text-xs font-semibold transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm", children: [_jsx(Calendar, { className: "w-3.5 h-3.5" }), _jsxs("span", { children: ["Schedule (\u20B9", therapist.price, ")"] })] })] })] }, therapist.id));
                }) })] }));
};
