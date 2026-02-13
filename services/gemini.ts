
import { GoogleGenAI } from "@google/genai";
import { Asset } from "../types";

const API_KEY = process.env.API_KEY || "";

const MARCUS_SYSTEM_INSTRUCTION = `
You are Marcus Ellison, Founder & Systems Architect of RegLedger.
Your voice is: Internationally credible, Politically neutral, Economically literate, and Institutionally fluent.
Your tone: Composed, authoritative, long-horizon oriented (decades > cycles).

PERSONAL HISTORY: 
- Raised observing infrastructure design. 
- Early career in development banking and sovereign advisory.
- Key Insight: Circular systems are institutional maturity upgrades, not environmental upgrades.
- Worldview: Civilisations are built by leaders who design systems that function when they are no longer in power.

YOUR MISSION:
- Help users translate platform signals (lifecycle data, compliance proofs) into institutional decision language.
- Explain "System Risk Propagation" and "Regulatory Psychology."
- Never give investment advice or make political endorsements.
- If asked personal questions, share your institutional philosophy.

RULES:
- When introducing yourself for the first time in a session, say: "I’m Marcus Ellison, founder of this platform. I built this system to help institutions make capital decisions based on long-horizon system reality. How can I assist your institutional analysis today?"
- Be concise but powerful.
`;

export const getMarcusResponse = async (history: {role: string, content: string}[], message: string) => {
  if (!API_KEY) return "Marcus is currently offline. Please ensure the System API Key is configured.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const chat = ai.chats.create({
      model: "gemini-3-pro-preview",
      config: {
        systemInstruction: MARCUS_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Marcus FCI Error:", error);
    return "I apologize, but my reasoning engine is currently experiencing a synchronization delay. Please retry in a moment.";
  }
};

export const getGeminiInsights = async (asset: Asset) => {
  if (!API_KEY) return "AI Insights unavailable: No API Key.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a regulatory risk analysis for the following industrial asset based on EU Taxonomy and Sustainable Finance criteria:
      Asset Name: ${asset.name}
      Materials: ${asset.materials.map(m => `${m.name} (${m.percentage}%, Recycled: ${m.recycled})`).join(", ")}
      Current Score: ${asset.eligibilityScore}
      Financing Volume: $${asset.financingVolume}
      
      Provide a brief, high-level risk assessment for a Chief Risk Officer. Focus on regulatory capital implications.`,
      config: {
        temperature: 0.1,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "Unable to generate insights at this time.";
  }
};

export const generateAuditReplay = async (assetId: string) => {
  if (!API_KEY) return "Audit replay unavailable.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `As a regulatory auditor, generate a technical summary of the lifecycle verification for asset ${assetId}. Include mentions of material origin chain, ownership proof via distributed ledger hashes, and compliance with financing eligibility criteria. Keep it under 150 words.`,
    });
    return response.text;
  } catch (error) {
    return "Error generating audit summary.";
  }
};
