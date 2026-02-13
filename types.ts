
export enum ComplianceStatus {
  VERIFIED = 'VERIFIED',
  PENDING = 'PENDING',
  WARNING = 'WARNING',
  BREACH = 'BREACH'
}

export interface Asset {
  id: string;
  name: string;
  type: string;
  origin: string;
  ownership: string[];
  materials: { name: string; percentage: number; recycled: boolean }[];
  status: ComplianceStatus;
  lastVerified: string;
  eligibilityScore: number;
  financingVolume: number;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  assetId: string;
  action: string;
  actor: string;
  proofHash: string;
  status: ComplianceStatus;
}

export interface ComplianceSignal {
  id: string;
  timestamp: string;
  type: 'regulatory' | 'material' | 'certification';
  severity: 'low' | 'medium' | 'high';
  message: string;
  assetName: string;
}

export interface ChatMessage {
  role: 'user' | 'marcus';
  content: string;
  timestamp: Date;
}
