// Interface for the Unreal API
export interface UnrealRegistrationPayload {
  iss: string;
  iat: number;
  exp: number;
  calls: number;
  paymentToken: string;
  sub: string;
}

export interface UnrealApiKeyResponse {
  key: string;
  hash: string;
  state: {
    wallet: string;
    name: string;
    calls: number;
    updatedAt: number;
    paymentToken: string;
  };
}

export interface UnrealApiKey {
  calls: number;
  chainId: number;
  hash: string;
  key: string;
  name: string;
  paymentToken: string;
  updatedAt: number;
}

export interface UnrealRegisterError {
  error: string;
  details?: string;
  requiredBalance?: string;
  balance?: string;
}

// Supabase
export interface UserType {
  name?: string;
  email?: string;
  unreal_token?: string;
  calls?: number;
  is_admin?: boolean;
  is_active?: boolean;
}

export interface ApiKey {
  id: number;
  created_at: string;
  user: number;
  provider: string;
  api_key: string;
  api_hash: string | null;
  api_name: string | null;
  payment_token: string | null;
  calls: number | null;
  chain_id: number | null;
  last_used: string | null;
}
