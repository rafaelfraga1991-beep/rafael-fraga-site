'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../data/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang]       = useState('pt-BR');
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('rf_lang');
    if (saved === 'en-US' || saved === 'pt-BR') setLang(saved);
  }, []);

  function switchLang(next) {
    if (next === lang) return;
    setSwitching(true);
    setTimeout(() => {
      setLang(next);
      localStorage.setItem('rf_lang', next);
      setSwitching(false);
    }, 180);
  }

  const t = content[lang];

  return (
    <LanguageContext.Provider value={{ lang, switchLang, t, switching }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
