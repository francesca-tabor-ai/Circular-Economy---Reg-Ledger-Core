
import React from 'react';
import { Asset, ComplianceStatus, AuditEvent, ComplianceSignal } from './types';

export const MOCK_ASSETS: Asset[] = [
  {
    id: "RL-8829-X",
    name: "Industrial Battery Cluster B-09",
    type: "Energy Storage",
    origin: "Germany (Giga-Factory 4)",
    ownership: ["L-Power Corp", "Greentech Equity", "Deutsche Bank (Collateral)"],
    materials: [
      { name: "Lithium", percentage: 12, recycled: true },
      { name: "Cobalt", percentage: 5, recycled: false },
      { name: "Nickel", percentage: 40, recycled: true }
    ],
    status: ComplianceStatus.VERIFIED,
    lastVerified: "2024-05-15T09:00:00Z",
    eligibilityScore: 94,
    financingVolume: 2400000
  },
  {
    id: "RL-1102-S",
    name: "Recycled Steel Batch #449",
    type: "Circular Materials",
    origin: "Sweden (Hybrit Plant)",
    ownership: ["S-Steel Group", "Nordic Infrastructure Fund"],
    materials: [
      { name: "Iron", percentage: 98, recycled: true },
      { name: "Carbon", percentage: 2, recycled: false }
    ],
    status: ComplianceStatus.WARNING,
    lastVerified: "2024-05-18T14:30:00Z",
    eligibilityScore: 78,
    financingVolume: 1250000
  },
  {
    id: "RL-5534-W",
    name: "Wind Turbine Rotor Hub MK-2",
    type: "Renewable Component",
    origin: "Denmark (Vestas Assembly)",
    ownership: ["Orsted", "Blackrock Sustainable Infrastructure"],
    materials: [
      { name: "Fiberglass", percentage: 60, recycled: false },
      { name: "Steel", percentage: 35, recycled: true }
    ],
    status: ComplianceStatus.VERIFIED,
    lastVerified: "2024-05-20T11:15:00Z",
    eligibilityScore: 91,
    financingVolume: 4800000
  }
];

export const MOCK_SIGNALS: ComplianceSignal[] = [
  {
    id: "SIG-001",
    timestamp: "2024-05-21T08:00:00Z",
    type: "regulatory",
    severity: "low",
    message: "New EU Taxonomy update for Circular Steel detected.",
    assetName: "Recycled Steel Batch #449"
  },
  {
    id: "SIG-002",
    timestamp: "2024-05-20T22:12:00Z",
    type: "certification",
    severity: "high",
    message: "ISO-14001 certification for supplier expiring in 5 days.",
    assetName: "Industrial Battery Cluster B-09"
  }
];

export const MOCK_AUDITS: AuditEvent[] = [
  {
    id: "AUD-X1",
    timestamp: "2024-05-20T11:15:00Z",
    assetId: "RL-5534-W",
    action: "Material Composition Verified",
    actor: "TUV SUD Oracle",
    proofHash: "0x8823...af01",
    status: ComplianceStatus.VERIFIED
  },
  {
    id: "AUD-X2",
    timestamp: "2024-05-18T14:30:00Z",
    assetId: "RL-1102-S",
    action: "Ownership Transfer Logged",
    actor: "S-Steel Group ERP",
    proofHash: "0xcc21...bb44",
    status: ComplianceStatus.WARNING
  }
];
