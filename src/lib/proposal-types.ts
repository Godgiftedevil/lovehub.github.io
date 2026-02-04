export type RelationshipType = "crush" | "girlfriend" | "wife" | "long-distance";
export type ToneType = "cute" | "emotional" | "filmy" | "funny" | "deep-romantic";
export type LanguageType = "english" | "hinglish";
export type PlanType = "basic" | "romantic" | "premium";

export interface ProposalData {
  id: string;
  yourName: string;
  partnerName: string;
  relationshipType: RelationshipType;
  tone: ToneType;
  language: LanguageType;
  message: string;
  photos: string[];
  photoCaptions: string[];
  backgroundMusic: string;
  customSlug?: string;
  plan: PlanType;
  createdAt: Date;
}

export const planLimits: Record<PlanType, {
  maxPhotos: number;
  hasMusic: boolean;
  hasAnimatedButtons: boolean;
  hasConfetti: boolean;
  hasSlideshow: boolean;
  hasCustomSlug: boolean;
}> = {
  basic: {
    maxPhotos: 3,
    hasMusic: false,
    hasAnimatedButtons: false,
    hasConfetti: false,
    hasSlideshow: false,
    hasCustomSlug: false
  },
  romantic: {
    maxPhotos: 5,
    hasMusic: true,
    hasAnimatedButtons: true,
    hasConfetti: true,
    hasSlideshow: false,
    hasCustomSlug: false
  },
  premium: {
    maxPhotos: 10,
    hasMusic: true,
    hasAnimatedButtons: true,
    hasConfetti: true,
    hasSlideshow: true,
    hasCustomSlug: true
  }
};

export const relationshipLabels: Record<RelationshipType, string> = {
  crush: "Crush",
  girlfriend: "Girlfriend",
  wife: "Wife",
  "long-distance": "Long Distance Partner"
};

export const toneLabels: Record<ToneType, string> = {
  cute: "Cute & Sweet",
  emotional: "Emotional & Heartfelt",
  filmy: "Filmy & Dramatic",
  funny: "Funny & Playful",
  "deep-romantic": "Deep Romantic"
};

export const languageLabels: Record<LanguageType, string> = {
  english: "English",
  hinglish: "Hinglish"
};

export const musicOptions = [
  { value: "romantic-piano", label: "Romantic Piano" },
  { value: "soft-guitar", label: "Soft Guitar" },
  { value: "love-ballad", label: "Love Ballad" },
  { value: "indian-romantic", label: "Indian Romantic" },
  { value: "none", label: "No Music" }
];
