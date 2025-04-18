/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Jwt = {
  __typename?: 'JWT';
  expire_at?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  updateUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  input: UserUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  login?: Maybe<Jwt>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type UserFilterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};
