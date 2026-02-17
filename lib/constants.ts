export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  direction: "ltr" | "rtl";
  region: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", direction: "ltr", region: "Global" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩", direction: "ltr", region: "India" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", direction: "ltr", region: "India" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰", direction: "rtl", region: "South Asia" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", direction: "ltr", region: "Europe" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", direction: "ltr", region: "Europe" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", direction: "ltr", region: "Europe" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷", direction: "ltr", region: "Americas" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", direction: "ltr", region: "Europe" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱", direction: "ltr", region: "Europe" },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱", direction: "ltr", region: "Europe" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", flag: "🇸🇪", direction: "ltr", region: "Europe" },
  { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴", direction: "ltr", region: "Europe" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦", direction: "ltr", region: "Europe" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", direction: "ltr", region: "East Asia" },
  { code: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳", direction: "ltr", region: "East Asia" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", direction: "ltr", region: "East Asia" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳", direction: "ltr", region: "Southeast Asia" },
  { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭", direction: "ltr", region: "Southeast Asia" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", direction: "ltr", region: "Southeast Asia" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾", direction: "ltr", region: "Southeast Asia" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", direction: "rtl", region: "Middle East" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷", direction: "ltr", region: "Middle East" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺", direction: "ltr", region: "Europe" },
];

export const RTL_LOCALES = ["ar", "ur"];

export const LOCALE_CODES = LANGUAGES.map((l) => l.code);

export const PLAYER_COLORS = ["#FF4444", "#4488FF", "#44FF88", "#FFCC00"];

export const ZONE_ICONS: Record<string, string> = {
  painting: "🖼️",
  bookshelf: "📚",
  clock: "🕰️",
  desk: "🪑",
  fireplace: "🔥",
  mirror: "🪞",
  chest: "📦",
  door: "🚪",
};

export const ZONE_NAMES: Record<string, string> = {
  painting: "Painting",
  bookshelf: "Bookshelf",
  clock: "Clock",
  desk: "Desk",
  fireplace: "Fireplace",
  mirror: "Mirror",
  chest: "Chest",
  door: "Door",
};

export const MAX_PLAYERS = 4;
export const MIN_PLAYERS_TO_START = 2;
export const GAME_TIME_LIMIT = 300;
export const TOTAL_PUZZLES = 4;
