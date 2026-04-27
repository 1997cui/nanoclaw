/**
 * Map between agent_group.id and OneCLI agent identifier.
 *
 * OneCLI requires identifiers to match `^[a-z0-9-]+$` (lowercase letters,
 * digits, hyphens). nanoclaw's agent_group.id uses underscores ("ag_<hex>"),
 * so we substitute `_` ↔ `-` at the OneCLI boundary. Round-trip works because
 * agent_group.id only ever contains `[a-z0-9_]` — no native hyphens to confuse
 * the reverse mapping.
 */

export function toOneCliIdentifier(agentGroupId: string): string {
  return agentGroupId.replace(/_/g, '-');
}

export function fromOneCliIdentifier(identifier: string): string {
  return identifier.replace(/-/g, '_');
}
