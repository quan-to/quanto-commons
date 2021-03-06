/**
 * Created by Lucas Teske on 02/05/17.
 */

const ErrorCodes: { [id: string]: string } = {
  // region Public Use
  InternalServerError: 'INTERNAL_SERVER_ERROR',
  NotFound: 'NOT_FOUND',

  // deprecated in favor of ErrorCode: INVALID_LOGIN_INFORMATION -> ErrorField: email -> Message: Email Already in Use
  EmailAlreadyInUse: 'EMAIL_ALREADY_IN_USE',
  NoDataAvailable: 'NO_DATA_AVAILABLE',
  InvalidLoginInformation: 'INVALID_LOGIN_INFORMATION',
  NotLogged: 'NOT_LOGGED',
  AlreadyExists: 'ALREADY_EXISTS',
  PermissionDenied: 'PERMISSION_DENIED',
  InvalidTokenType: 'INVALID_TOKEN_TYPE',
  InvalidFieldData: 'INVALID_FIELD_DATA',
  AlreadyClient: 'ALREADY_CLIENT',
  AlreadyPaid: 'ALREADY_PAID',
  PaymentError: 'PAYMENT_ERROR',
  InsufficientFunds: 'INSUFFICIENT_FUNDS',
  // deprecated in favor of ErrorCode: SYSTEM_UNAVAILABLE -> ErrorField: bank
  BankingSystemOffline: 'BANKING_SYSTEM_OFFLINE',
  OutdatedAPI: 'OUTDATED_API',
  // deprecated in favor of ErrorCode: NOT_SUPPORTED -> ErrorField: bank
  BankNotSupported: 'BANK_NOT_SUPPORTED',
  // deprecated
  VaultSystemOffline: 'VAULT_SYSTEM_OFFLINE',
  ServerIsBusy: 'SERVER_IS_BUSY',
  Revoked: 'REVOKED',
  AlreadySigned: 'ALREADY_SIGNED',
  Rejected: 'REJECTED',
  // deprecated in favor of ErrorCode: NOT_SUPPORTED -> ErrorField: operation
  OperationNotSupported: 'OPERATION_NOT_SUPPORTED',
  GraphQLError: 'GRAPHQL_ERROR',
  OperationLimitExceeded: 'OPERATION_LIMIT_EXCEEDED',
  InvalidTransactionDate: 'INVALID_TRANSACTION_DATE',
  BoletoCreationNotEnabled: 'BOLETO_CREATION_NOT_ENABLED',
  BoletoOurNumberExausted: 'BOLETO_OUR_NUMBER_EXAUSTED',
  NotImplemented: 'NOT_IMPLEMENTED',
  MaxOTPTriesExceeded: 'MAX_OTP_TRIES_EXCEEDED',

  AccountInUse: 'ACCOUNT_IN_USE',
  AccountLocked: 'ACCOUNT_LOCKED',
  NotSupported: 'NOT_SUPPORTED',
  SystemUnavailable: 'SYSTEM_UNAVAILABLE',
  // endregion

  // region Internal Use - Don't worry about these if you're a partner.
  EverythingIsTerrible: 'EVERYTHING_IS_TERRIBLE',
  QuantoInternalError: 'QUANTO_INTERNAL_ERROR',
  RoutingSystemOffline: 'ROUTING_SYSTEM_OFFLINE',
  QITSystemOffline: 'QIT_SYSTEM_OFFLINE',
  TargetConnectionError: 'CONNECTION_ERROR',
  VaulterIsDead: 'VAULTER_IS_DEAD',
  SynchronizationError: 'SYNCHRONIZATION_ERROR',
  RoutingError: 'ROUTING_ERROR',
  // endregion
};

const ErrorCodeValueToKey = (value: string) => {
  const keys = Object.keys(ErrorCodes);
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (ErrorCodes[k] === value) {
      return k;
    }
  }
  return null;
};

export {
  ErrorCodes,
  ErrorCodeValueToKey,
};
