import { createHash } from "crypto";

const DEFAULT_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const normalizeCandidatePatitionKey = (candidate) => {
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

export function deterministicPartitionKey(event) {
  const hasPartitionKey = event && event.partitionKey;

  if (hasPartitionKey) {
    return normalizeCandidatePatitionKey(event.partitionKey);
  }

  const hasEvent = event && Object.keys(event).length > 0;

  if (hasEvent) {
    return normalizeCandidatePatitionKey(event);
  }

  return DEFAULT_PARTITION_KEY;
}
